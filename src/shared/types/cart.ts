import {
  useAddToCartMutation,
  useDeleteItemByIdMutation,
  useUpdatedCartMutation
} from '@/slices/cart/cart.rtk';
import {ShoppingCartModel} from '../models/shoppingCartModel';
import {RequestFilterParams} from './filter';
import {OrderI} from './order';
import {ProductI} from './product';

interface GetCartResponse {
  products: ProductI[];
}

interface GetOrdersResponse {
  results: OrderI[];
  totalPages: number;
  totalItems: number;
  currentPage: number;
}

type CompleteOrderResponse = {
  id: string;
};

type CompleteOrderArgs = {
  orderInformation: ShoppingCartModel;
  products: CartItem[];
  totalPrice: number;
};

type DeleteItemByIdMutation = typeof useDeleteItemByIdMutation;
type UpdateCartMutation = typeof useUpdatedCartMutation;
type AddToCartMutation = typeof useAddToCartMutation;

type CartItem = {_id: string; quantity: number};
type GetOrdersQuery = RequestFilterParams | void;

export {
  type AddToCartMutation,
  type CartItem,
  type CompleteOrderArgs,
  type CompleteOrderResponse,
  type DeleteItemByIdMutation,
  type GetCartResponse,
  type GetOrdersQuery,
  type GetOrdersResponse,
  type UpdateCartMutation
};
