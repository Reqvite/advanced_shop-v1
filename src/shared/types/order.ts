import {LabelOptionsI} from './options';
import {ProductI} from './product';

export interface OrderI {
  _id: string;
  products: ProductI[];
  billingInfo: LabelOptionsI[];
  createdAt: string;
  totalPrice: number;
}
