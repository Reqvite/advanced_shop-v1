import {ApiPathEnum, ProductsApiPath} from '@/shared/enums/apiPath.enum';
import {encodeSearchParams} from '@/shared/lib/helpers';
import {getSortOption} from '@/shared/lib/helpers/enumLabelResolver/sortValueResolver';
import {notificationService} from '@/shared/services';
import {GetProductsResponse} from '@/shared/types/product';
import {GetProductsQuery} from './products.rtk';

interface RequestOptions {
  url: string;
  params?: URLSearchParams;
  needAuth?: boolean;
}

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

const buildGetProductsRequestOptions = ({
  params,
  path = '',
  needAuth
}: {
  params: GetProductsQuery;
  path?: string;
  needAuth?: boolean;
}): RequestOptions => {
  if (!params) {
    return {url: ApiPathEnum.PRODUCTS};
  }

  const paramsCopy = {...params};
  const sortValue = getSortOption(params.sort as number);

  if (sortValue) {
    paramsCopy.orderBy = sortValue.option.orderBy;
    paramsCopy.order = sortValue.option.order;
  }

  return {
    url: `${ApiPathEnum.PRODUCTS}${path}`,
    params: encodeSearchParams(paramsCopy),
    needAuth
  };
};

const getUserWishlist = (params: GetProductsQuery): RequestOptions => {
  return buildGetProductsRequestOptions({params, path: ProductsApiPath.WISHLIST, needAuth: true});
};

const getProducts = (params: GetProductsQuery): RequestOptions => {
  return buildGetProductsRequestOptions({params});
};

const getProductsQuantityByCategories = (
  params: GetProductsQuery
): {
  url: string;
  params?: URLSearchParams;
} => {
  if (params) {
    const newParams = encodeSearchParams(params);
    return {url: `${ApiPathEnum.PRODUCTS}${ProductsApiPath.PRODUCTS_QUANTITY}`, params: newParams};
  }

  return {url: `${ApiPathEnum.PRODUCTS}${ProductsApiPath.PRODUCTS_QUANTITY}`};
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
      ...currentCache,
      results: [...currentCache.results, ...uniqueNewItems]
    };
  }
  return newItems;
};

const forceRefetch = ({currentArg, previousArg}: {currentArg: unknown; previousArg: unknown}) => {
  return currentArg !== previousArg;
};

export {
  forceRefetch,
  getProducts,
  getProductsQuantityByCategories,
  getUserWishlist,
  mergeProductsResults,
  mergeProductsWishlistResults,
  onQueryStartedToast
};
