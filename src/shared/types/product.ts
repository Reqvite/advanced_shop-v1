import {LabelOptionsI} from './options';

interface ProductI {
  _id: string;
  rating: number;
  title: string;
  description: string;
  characteristics: LabelOptionsI[];
  price: number;
  discount?: number;
}

export {type ProductI};
