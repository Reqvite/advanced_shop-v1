import {ApiPathEnum, ProductsApiPath} from '@/shared/enums/apiPath.enum';
import {encodeSearchParams} from '@/shared/lib/helpers';
import {getSortOption} from '@/shared/lib/helpers/enumLabelResolver/sortValueResolver';
import {RequestFilterParams} from '@/shared/types/filter';
import {GetProductsQuery} from './products.rtk';

interface RequestOptions {
  url: string;
  params?: URLSearchParams;
  needAuth?: boolean;
}

interface RequestOptions {
  url: string;
  params?: URLSearchParams;
  needAuth?: boolean;
}

interface TransformedQueryParams extends Omit<RequestFilterParams, 'category'> {
  category?: number;
  orderBy?: string;
  order?: number;
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

  const paramsCopy: TransformedQueryParams = {...params};
  const sortValue = getSortOption(params.sort as number);

  if (sortValue) {
    paramsCopy.orderBy = sortValue.option.orderBy;
    paramsCopy.order = sortValue.option.order;
  }
  if (params?.category) {
    let otherCategories: number[] = [];
    if (params?.categories) {
      otherCategories = params?.categories as number[];
    }
    paramsCopy.categories = [params.category, ...otherCategories] as number[];
  }
  delete paramsCopy['category'];

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

const getProductsQuantityByCategories = (params?: GetProductsQuery): RequestOptions => {
  if (params) {
    const paramsCopy: TransformedQueryParams = {...params};
    delete paramsCopy['category'];
    const newParams = encodeSearchParams(paramsCopy);
    return {url: `${ApiPathEnum.PRODUCTS}${ProductsApiPath.PRODUCTS_QUANTITY}`, params: newParams};
  }

  return {url: `${ApiPathEnum.PRODUCTS}${ProductsApiPath.PRODUCTS_QUANTITY}`};
};

export {getProducts, getProductsQuantityByCategories, getUserWishlist};
