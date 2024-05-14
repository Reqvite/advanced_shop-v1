import {createApi} from '@reduxjs/toolkit/query/react';
import {store} from '@/app/providers/StoreProvider/config/store';
import {axiosBaseQuery} from '@/shared/api/baseQuery';
import {NotificationMessage} from '@/shared/const/notificationMessages';
import {ApiPathEnum} from '@/shared/enums/apiPath.enum';
import {RtkApiTagsEnum} from '@/shared/enums/rtkTags.enum';
import {notificationService} from '@/shared/services';
import {FilterKeys} from '@/shared/types/filter';
import {
  GetProductsQuantityByCategories,
  GetProductsResponse,
  ProductI
} from '@/shared/types/product';
import {UserWishlistType} from '@/shared/types/user/user';
import {actions as userActions} from '../user';
import {getProducts, getProductsQuantityByCategories} from './apiHelpers';

export type GetProductsQuery = FilterKeys | void;

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

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: axiosBaseQuery(),
  tagTypes: [RtkApiTagsEnum.Product, RtkApiTagsEnum.Products],
  endpoints: (builder) => ({
    getProducts: builder.query<GetProductsResponse, GetProductsQuery>({
      query: (params) => getProducts(params),
      providesTags: [RtkApiTagsEnum.Products],
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
    }),
    updateWishlist: builder.mutation<UserWishlistType, string | undefined>({
      query: (id) => ({
        method: 'PATCH',
        needAuth: true,
        url: `${ApiPathEnum.PRODUCTS}/${id}`
      }),
      onQueryStarted: (_, {queryFulfilled}) =>
        onQueryStartedToast({queryFulfilled}, NotificationMessage.SUCCESS('Wishlist updated')),
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
  useUpdateWishlistMutation
} = productsApi;
