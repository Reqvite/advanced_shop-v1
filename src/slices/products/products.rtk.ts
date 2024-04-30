import {createApi} from '@reduxjs/toolkit/query/react';
import {axiosBaseQuery} from '@/shared/api/baseQuery';
import {ApiPathEnum} from '@/shared/enums/apiPath.enum';
import {RtkApiTagsEnum} from '@/shared/enums/rtkTags.enum';
import {encodeSearchParams} from '@/shared/lib/helpers';
import {ProductI} from '@/shared/types/product';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: axiosBaseQuery(),
  tagTypes: [RtkApiTagsEnum.Product, RtkApiTagsEnum.Products],
  endpoints: (builder) => ({
    getProducts: builder.query<
      {results: ProductI[]; totalPages: number; totalItems: number},
      URLSearchParams
    >({
      query: (params) => {
        const newParams = encodeSearchParams(params);
        return {url: ApiPathEnum.PRODUCTS, params: newParams};
      },
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
