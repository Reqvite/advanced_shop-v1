import {GetOrdersQuery, GetOrdersResponse} from '@/shared/types/cart';

const mergeOrdersResults = (
  currentCache: GetOrdersResponse,
  newItems: GetOrdersResponse,
  args: {
    arg: GetOrdersQuery;
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

export {mergeOrdersResults};
