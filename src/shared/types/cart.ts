import {useDeleteItemByIdMutation} from '@/slices/cart';
import {ProductI} from './product';

export interface GetCartResponse {
  products: ProductI[];
}

export type DeleteItemByIdMutation = typeof useDeleteItemByIdMutation;

export type CartItem = {_id: string; quantity: number};
