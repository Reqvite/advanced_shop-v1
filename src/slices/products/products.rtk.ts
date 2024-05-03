import {createApi} from '@reduxjs/toolkit/query/react';
import {axiosBaseQuery} from '@/shared/api/baseQuery';
import {ApiPathEnum} from '@/shared/enums/apiPath.enum';
import {RtkApiTagsEnum} from '@/shared/enums/rtkTags.enum';
import {encodeSearchParams} from '@/shared/lib/helpers';
import {getSortOption} from '@/shared/lib/helpers/enumLabelResolver/sortValueResolver';
import {FilterKeys} from '@/shared/types/filter';
import {GetProductsResponse, ProductI} from '@/shared/types/product';

type GetProductsQuery = FilterKeys | void;

const getProducts = (params: GetProductsQuery) => {
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

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: axiosBaseQuery(),
  tagTypes: [RtkApiTagsEnum.Product, RtkApiTagsEnum.Products],
  endpoints: (builder) => ({
    getProducts: builder.query<GetProductsResponse, GetProductsQuery>({
      query: (params) => getProducts(params),
      providesTags: [RtkApiTagsEnum.Products]
    }),
    getProductById: builder.query<ProductI, string | undefined>({
      query: (id) => ({
        url: `${ApiPathEnum.PRODUCTS}/${id}`
      }),
      providesTags: [RtkApiTagsEnum.Product]
    })
  })
});

export const {useGetProductsQuery, useGetProductByIdQuery} = productsApi;
