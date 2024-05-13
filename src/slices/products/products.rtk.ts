import {createApi} from '@reduxjs/toolkit/query/react';
import {axiosBaseQuery} from '@/shared/api/baseQuery';
import {ApiPathEnum} from '@/shared/enums/apiPath.enum';
import {RtkApiTagsEnum} from '@/shared/enums/rtkTags.enum';
import {FilterKeys} from '@/shared/types/filter';
import {
  GetProductsQuantityByCategories,
  GetProductsResponse,
  ProductI
} from '@/shared/types/product';
import {getProducts, getProductsQuantityByCategories} from './apiHelpers';

export type GetProductsQuery = FilterKeys | void;

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: axiosBaseQuery(),
  tagTypes: [RtkApiTagsEnum.Product, RtkApiTagsEnum.Products],
  endpoints: (builder) => ({
    getProducts: builder.query<GetProductsResponse, GetProductsQuery>({
      query: (params) => getProducts(params),
      providesTags: [RtkApiTagsEnum.Products],
      transformResponse: (response: GetProductsResponse) => {
        return response;
      },
      serializeQueryArgs: ({endpointName}) => {
        return endpointName;
      },
      merge: (currentCache, newItems, {arg}) => {
        if (arg?.showMore) {
          return {
            ...currentCache,
            results: [...currentCache.results, ...newItems.results]
          };
        }

        return newItems;
      },
      forceRefetch({currentArg, previousArg}) {
        return currentArg !== previousArg;
      }
    }),
    getProductsQuantityByCategories: builder.query<
      GetProductsQuantityByCategories[],
      GetProductsQuery
    >({
      query: (params) => getProductsQuantityByCategories(params)
    }),
    getProductById: builder.query<ProductI, string | undefined>({
      query: (id) => ({
        url: `${ApiPathEnum.PRODUCTS}/${id}`
      }),
      providesTags: [RtkApiTagsEnum.Product]
    })
  })
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useGetProductsQuantityByCategoriesQuery
} = productsApi;
