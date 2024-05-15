import {ApiPathEnum, ProductsApiPath} from '@/shared/enums/apiPath.enum';
import {encodeSearchParams} from '@/shared/lib/helpers';
import {getSortOption} from '@/shared/lib/helpers/enumLabelResolver/sortValueResolver';
import {GetProductsQuery} from './products.rtk';

interface RequestOptions {
  url: string;
  params?: URLSearchParams;
  needAuth?: boolean;
}

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

export {getProducts, getProductsQuantityByCategories, getUserWishlist};
