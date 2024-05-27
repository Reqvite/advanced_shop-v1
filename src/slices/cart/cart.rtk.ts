import {createApi} from '@reduxjs/toolkit/query/react';
import {store} from '@/app/providers/StoreProvider/config/store';
import {axiosBaseQuery} from '@/shared/api/baseQuery';
import {NotificationMessage} from '@/shared/const/notificationMessages';
import {ApiPathEnum} from '@/shared/enums/apiPath.enum';
import {RtkApiTagsEnum} from '@/shared/enums/rtkTags.enum';
import {onQueryStartedToast} from '@/shared/lib/helpers';
import {CartItem} from '@/shared/types/cart';
import {CartProductI} from '@/shared/types/product';
import {actions as userActions} from '../user';

export const cartApi = createApi({
  reducerPath: 'cartApi',
  baseQuery: axiosBaseQuery(),
  tagTypes: [RtkApiTagsEnum.Cart],
  endpoints: (builder) => ({
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
    })
  })
});

export const {useGetCartQuery, useDeleteItemByIdMutation, useUpdatedCartMutation} = cartApi;
