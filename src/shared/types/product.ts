import {LabelOptionsI} from './options';

interface ProductI {
  _id: string;
  rating: number;
  img: string[];
  title: string;
  description: string;
  characteristics: LabelOptionsI[];
  price: number;
  discount?: number;
  tags?: {_id: string; label: string}[];
}

export {type ProductI};
