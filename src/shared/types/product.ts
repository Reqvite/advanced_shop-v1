import {LabelOptionsI} from './options';

interface ProductI {
  _id: string;
  rating: number;
  image: string[];
  title: string;
  description: LabelOptionsI[];
  characteristics: LabelOptionsI[];
  subCategory: number;
  category: number;
  createdAt: Date;
  price: number;
  discount?: number;
  tags?: number[];
}

export {type ProductI};
