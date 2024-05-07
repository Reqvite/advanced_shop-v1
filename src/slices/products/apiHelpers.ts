import {ApiPathEnum, ProductsApiPath} from '@/shared/enums/apiPath.enum';
import {encodeSearchParams} from '@/shared/lib/helpers';
import {getSortOption} from '@/shared/lib/helpers/enumLabelResolver/sortValueResolver';
import {GetProductsQuery} from './products.rtk';

const getProducts = (
  params: GetProductsQuery
): {
  url: ApiPathEnum;
  params?: URLSearchParams;
} => {
  if (params) {
    const paramsCopy = {...params};
    if (params.sort) {
      const sortValue = getSortOption(params.sort as number);
      if (sortValue) {
        paramsCopy.orderBy = sortValue.option.orderBy;
        paramsCopy.order = sortValue.option.order;
      }
    }
    const newParams = encodeSearchParams(paramsCopy);

    return {url: ApiPathEnum.PRODUCTS, params: newParams};
  }

  return {url: ApiPathEnum.PRODUCTS};
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

export {getProducts, getProductsQuantityByCategories};
