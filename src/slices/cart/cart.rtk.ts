import {BarDatum} from '@nivo/bar';
import {createApi} from '@reduxjs/toolkit/query/react';
import {store} from '@/app/providers/StoreProvider/config/store';
import {axiosBaseQuery} from '@/shared/api/baseQuery';
import {NotificationMessage} from '@/shared/const/notificationMessages';
import {ApiPathEnum, CartApiPath} from '@/shared/enums/apiPath.enum';
import {RtkApiTagsEnum} from '@/shared/enums/rtkTags.enum';
import {TimeLine} from '@/shared/enums/timeline.enum';
import {forceRefetch, onQueryStartedToast} from '@/shared/lib/helpers';
import {
  CartItem,
  CompleteOrderArgs,
  CompleteOrderResponse,
  GetOrdersResponse
} from '@/shared/types/cart';
import {RequestFilterParams} from '@/shared/types/filter';
import {CartProductI} from '@/shared/types/product';
import {actions as userActions} from '../user';
import {mergeOrdersResults} from './merges';
import {onQueryCreateSessionStartedToast} from './onQueryStarted';
import {getOrdersStatistic, getUserOrders} from './queries';

export type GetOrdersQuery = RequestFilterParams | void;
export type GetOrdersStatisticQuery = {timeline: TimeLine};

export const cartApi = createApi({
  reducerPath: 'cartApi',
  baseQuery: axiosBaseQuery(),
  tagTypes: [RtkApiTagsEnum.Cart, RtkApiTagsEnum.Orders],
  endpoints: (builder) => ({
    getOrdersStatistic: builder.query<BarDatum[] & {indexBy: string}, GetOrdersStatisticQuery>({
      query: (params) => getOrdersStatistic(params)
    }),
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
    createCheckoutSession: builder.mutation<CompleteOrderResponse, CompleteOrderArgs>({
      query: (data) => ({
        url: `${ApiPathEnum.STRIPE}${CartApiPath.CREATE_CHECKOUT_SESSION}`,
        method: 'POST',
        needAuth: true,
        data
      }),
      transformResponse: (response: CompleteOrderResponse) => {
        return response;
      },
      onQueryStarted: (_, {queryFulfilled}) => onQueryCreateSessionStartedToast({queryFulfilled})
    })
  })
});

export const {
  useGetOrdersStatisticQuery,
  useGetCartQuery,
  useDeleteItemByIdMutation,
  useUpdatedCartMutation,
  useAddToCartMutation,
  useGetOrdersQuery,
  useCreateCheckoutSessionMutation
} = cartApi;
