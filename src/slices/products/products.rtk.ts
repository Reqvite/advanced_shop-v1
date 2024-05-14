import {createApi} from '@reduxjs/toolkit/query/react';
import {store} from '@/app/providers/StoreProvider/config/store';
import {axiosBaseQuery} from '@/shared/api/baseQuery';
import {ApiPathEnum} from '@/shared/enums/apiPath.enum';
import {RtkApiTagsEnum} from '@/shared/enums/rtkTags.enum';
import {encodeSearchParams} from '@/shared/lib/helpers';
import {notificationService} from '@/shared/services';
import {FilterKeys} from '@/shared/types/filter';
import {
  GetProductsQuantityByCategories,
  GetProductsResponse,
  ProductI
} from '@/shared/types/product';
import {UserWishlistType} from '@/shared/types/user/user';
import {actions as filterActions} from '../filter';
import {actions as userActions} from '../user';
import {
  forceRefetch,
  getProducts,
  getProductsQuantityByCategories,
  getUserWishlist,
  mergeProductsResults,
  mergeProductsWishlistResults
} from './apiHelpers';

export type GetProductsQuery = FilterKeys | void;
export type GetWishlistQuery = {_id: string; setSearchParams: () => void};

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
      merge: mergeProductsWishlistResults,
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
      async onQueryStarted({_id, setSearchParams}: GetWishlistQuery, {dispatch, queryFulfilled}) {
        try {
          await queryFulfilled;
          dispatch(
            productsApi.util.updateQueryData('getUserWishlist', _id, (draft) => {
              if (draft.results.length === 1) {
                dispatch(filterActions.addKey({page: 1}));
                setSearchParams(encodeSearchParams({page: 1}));
                productsApi.util.invalidateTags([RtkApiTagsEnum.WishlistProducts]);
              } else {
                productsApi.util.invalidateTags([RtkApiTagsEnum.WishlistProducts]);
              }
              draft.results = draft.results.filter((item) => item._id !== _id);
              return draft;
            })
          );
          notificationService.success('Wishlist updated');
        } catch (error: unknown) {
          const {error: customError} = error as any;
          if (customError?.code === 401) return;
          notificationService.error(customError?.data?.error);
        }
      },
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
