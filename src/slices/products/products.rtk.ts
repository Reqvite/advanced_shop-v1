import {createApi} from '@reduxjs/toolkit/query/react';
import {store} from '@/app/providers/StoreProvider/config/store';
import {axiosBaseQuery} from '@/shared/api/baseQuery';
import {ApiPathEnum} from '@/shared/enums/apiPath.enum';
import {RtkApiTagsEnum} from '@/shared/enums/rtkTags.enum';
import {forceRefetch} from '@/shared/lib/helpers';
import {RequestFilterParams} from '@/shared/types/filter';
import {
  GetProductsQuantityByCategories,
  GetProductsResponse,
  ProductI
} from '@/shared/types/product';
import {UserWishlistType} from '@/shared/types/user/user';
import {actions as userActions} from '../user';
import {onQueryStartedUpdateWishlist} from './helpers';
import {mergeProductsResults} from './merges';
import {getProducts, getProductsQuantityByCategories, getUserWishlist} from './queries';

export type GetProductsQuery = RequestFilterParams | void;
export type GetWishlistQuery = {
  _id: string;
  setSearchParams?: (params: URLSearchParams) => void;
  navigate?: (page: number) => void;
};

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: axiosBaseQuery(),
  tagTypes: [RtkApiTagsEnum.Product, RtkApiTagsEnum.Products, RtkApiTagsEnum.WishlistProducts],
  endpoints: (builder) => ({
    getProducts: builder.query<GetProductsResponse, GetProductsQuery>({
      query: (params) => getProducts(params),
      providesTags: [RtkApiTagsEnum.Products],
      serializeQueryArgs: ({endpointName}) => {
        return endpointName;
      },
      merge: mergeProductsResults,
      forceRefetch
    }),
    getUserWishlist: builder.query<GetProductsResponse, GetProductsQuery | string>({
      query: (params) => getUserWishlist(params as GetProductsQuery),
      providesTags: [RtkApiTagsEnum.WishlistProducts],
      serializeQueryArgs: ({endpointName}) => {
        return endpointName;
      },
      merge: mergeProductsResults,
      forceRefetch
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
    }),
    updateWishlist: builder.mutation<UserWishlistType, GetWishlistQuery>({
      query: ({_id}) => ({
        method: 'PATCH',
        needAuth: true,
        url: `${ApiPathEnum.PRODUCTS}/${_id}`
      }),
      invalidatesTags: [RtkApiTagsEnum.WishlistProducts],
      onQueryStarted: onQueryStartedUpdateWishlist,
      transformResponse: (response: UserWishlistType) => {
        store.instance.dispatch(userActions.setWishlist(response));
        return response;
      }
    })
  })
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useGetProductsQuantityByCategoriesQuery,
  useGetUserWishlistQuery,
  useUpdateWishlistMutation
} = productsApi;
