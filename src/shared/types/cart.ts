import {
  useAddToCartMutation,
  useDeleteItemByIdMutation,
  useUpdatedCartMutation
} from '@/slices/cart';
import {ShoppingCartModel} from '../models/shoppingCartModel';
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

type CompleteOrderArgs = {
  orderInformation: ShoppingCartModel;
  products: CartItem[];
  totalPrice: number;
};

type DeleteItemByIdMutation = typeof useDeleteItemByIdMutation;
type UpdateCartMutation = typeof useUpdatedCartMutation;
type AddToCartMutation = typeof useAddToCartMutation;

type CartItem = {_id: string; quantity: number};

export {
  type AddToCartMutation,
  type CartItem,
  type CompleteOrderArgs,
  type DeleteItemByIdMutation,
  type GetCartResponse,
  type GetOrdersResponse,
  type UpdateCartMutation
};
