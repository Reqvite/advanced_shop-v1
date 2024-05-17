import {GetProductsResponse} from '@/shared/types/product';
import {GetProductsQuery} from './products.rtk';

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

export {mergeProductsResults};
