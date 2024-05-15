import {notificationService} from '@/shared/services';
import {GetProductsResponse} from '@/shared/types/product';
import {GetProductsQuery} from './products.rtk';

const onQueryStartedToast = async (
  {queryFulfilled}: {queryFulfilled: any},
  message = 'Success'
) => {
  try {
    await queryFulfilled;
    notificationService.success(message);
  } catch (error: unknown) {
    const {error: customError} = error as any;
    if (customError.code === 401) return;
    notificationService.error(customError?.data?.error);
  }
};

const mergeProductsResults = (
  currentCache: GetProductsResponse,
  newItems: GetProductsResponse,
  args: {
    arg: GetProductsQuery;
    baseQueryMeta: object | undefined;
    requestId: string;
    fulfilledTimeStamp: number;
  }
) => {
  if (args?.arg?.showMore) {
    return {
      ...currentCache,
      results: [...currentCache.results, ...newItems.results]
    };
  }
  return newItems;
};

const mergeProductsWishlistResults = (
  currentCache: GetProductsResponse,
  newItems: GetProductsResponse,
  args: {
    arg: GetProductsQuery;
    baseQueryMeta: object | undefined;
    requestId: string;
    fulfilledTimeStamp: number;
  }
) => {
  if (args?.arg?.showMore) {
    const uniqueNewItems = newItems.results.filter(
      (newItem) => !currentCache.results.some((existingItem) => existingItem._id === newItem._id)
    );
    return {
      ...newItems,
      results: [...currentCache.results, ...uniqueNewItems]
    };
  }
  return newItems;
};

const forceRefetch = ({currentArg, previousArg}: {currentArg: unknown; previousArg: unknown}) => {
  return currentArg !== previousArg;
};

export {forceRefetch, mergeProductsResults, mergeProductsWishlistResults, onQueryStartedToast};
