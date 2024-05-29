import {
  useAddToCartMutation,
  useDeleteItemByIdMutation,
  useUpdatedCartMutation
} from '@/slices/cart';
import {ProductI} from './product';

interface GetCartResponse {
  products: ProductI[];
}

type DeleteItemByIdMutation = typeof useDeleteItemByIdMutation;
type UpdateCartMutation = typeof useUpdatedCartMutation;
type AddToCartMutation = typeof useAddToCartMutation;

type CartItem = {_id: string; quantity: number};

export {
  type AddToCartMutation,
  type CartItem,
  type DeleteItemByIdMutation,
  type GetCartResponse,
  type UpdateCartMutation
};
