import {
  useAddToCartMutation,
  useDeleteItemByIdMutation,
  useUpdatedCartMutation
} from '@/slices/cart';
import {ShoppingCartModel} from '../models/shoppingCartModel';
import {ProductI} from './product';

interface GetCartResponse {
  products: ProductI[];
}

type CompleteOrderArgs = {
  orderInformation: ShoppingCartModel;
  products: CartItem[];
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
  type UpdateCartMutation
};
