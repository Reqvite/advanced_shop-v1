import {createApi} from '@reduxjs/toolkit/query/react';
import {store} from '@/app/providers/StoreProvider/config/store';
import {axiosBaseQuery} from '@/shared/api/baseQuery';
import {NotificationMessage} from '@/shared/const/notificationMessages';
import {ApiPathEnum, CartApiPath} from '@/shared/enums/apiPath.enum';
import {RtkApiTagsEnum} from '@/shared/enums/rtkTags.enum';
import {onQueryStartedToast} from '@/shared/lib/helpers';
import {forceRefetch} from '@/shared/lib/helpers';
import {CartItem, CompleteOrderArgs, GetOrdersResponse} from '@/shared/types/cart';
import {RequestFilterParams} from '@/shared/types/filter';
import {CartProductI} from '@/shared/types/product';
import {actions as userActions} from '../user';
import {mergeOrdersResults} from './merges';
import {getUserOrders} from './queries';

export type GetOrdersQuery = RequestFilterParams | void;

export const cartApi = createApi({
  reducerPath: 'cartApi',
  baseQuery: axiosBaseQuery(),
  tagTypes: [RtkApiTagsEnum.Cart, RtkApiTagsEnum.Orders],
  endpoints: (builder) => ({
    getOrders: builder.query<GetOrdersResponse, GetOrdersQuery>({
      query: (params) => getUserOrders(params),
      serializeQueryArgs: ({endpointName}) => {
        return endpointName;
      },
      merge: mergeOrdersResults,
      forceRefetch,
      providesTags: [RtkApiTagsEnum.Orders]
    }),
    getCart: builder.query<CartProductI[], void>({
      query: () => ({
        url: ApiPathEnum.CART,
        needAuth: true
      }),
      providesTags: [RtkApiTagsEnum.Cart]
    }),
    deleteItemById: builder.mutation<CartItem[], {_id: string}>({
      query: ({_id}) => ({
        url: `${ApiPathEnum.CART}/${_id}`,
        method: 'DELETE',
        needAuth: true
      }),
      transformResponse: (response: CartItem[]) => {
        store.instance.dispatch(userActions.setCart(response));
        return response;
      },
      onQueryStarted: (_, {queryFulfilled}) =>
        onQueryStartedToast(
          {queryFulfilled},
          NotificationMessage.SUCCESS('Product successfully deleted from your cart.')
        ),
      invalidatesTags: [RtkApiTagsEnum.Cart]
    }),
    updatedCart: builder.mutation<CartItem[], CartItem>({
      query: (data) => ({
        url: `${ApiPathEnum.CART}`,
        method: 'PUT',
        needAuth: true,
        data
      }),
      transformResponse: (response: CartItem[]) => {
        store.instance.dispatch(userActions.setCart(response));
        return response;
      },
      onQueryStarted: (_, {queryFulfilled}) =>
        onQueryStartedToast(
          {queryFulfilled},
          NotificationMessage.SUCCESS('Product quantity updated.')
        ),
      invalidatesTags: [RtkApiTagsEnum.Cart]
    }),
    addToCart: builder.mutation<CartItem[], CartItem>({
      query: (data) => ({
        url: `${ApiPathEnum.CART}`,
        method: 'POST',
        needAuth: true,
        data
      }),
      transformResponse: (response: CartItem[]) => {
        store.instance.dispatch(userActions.setCart(response));
        return response;
      },
      onQueryStarted: (_, {queryFulfilled}) =>
        onQueryStartedToast(
          {queryFulfilled},
          NotificationMessage.SUCCESS('Product added to cart.')
        ),
      invalidatesTags: [RtkApiTagsEnum.Cart]
    }),
    completeOrder: builder.mutation<CartItem[], CompleteOrderArgs>({
      query: (data) => ({
        url: `${ApiPathEnum.CART}${CartApiPath.COMPLETE}`,
        method: 'POST',
        needAuth: true,
        data
      }),
      transformResponse: (response: CartItem[]) => {
        store.instance.dispatch(userActions.clearCart());
        return response;
      },
      onQueryStarted: (_, {queryFulfilled}) =>
        onQueryStartedToast(
          {queryFulfilled},
          NotificationMessage.SUCCESS(
            'Order completed successfully. A manager will contact you shortly.'
          )
        ),
      invalidatesTags: [RtkApiTagsEnum.Cart]
    })
  })
});

export const {
  useGetCartQuery,
  useDeleteItemByIdMutation,
  useUpdatedCartMutation,
  useAddToCartMutation,
  useCompleteOrderMutation,
  useGetOrdersQuery
} = cartApi;
