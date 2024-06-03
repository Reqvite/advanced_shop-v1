import {LabelOptionsI} from './options';
import {CartProductI} from './product';

export interface OrderI {
  _id: string;
  products: CartProductI[];
  billingInfo: LabelOptionsI[];
  createdAt: string;
  totalPrice: number;
}
