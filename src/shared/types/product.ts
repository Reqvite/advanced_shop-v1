import {useUpdateWishlistMutation} from '@/slices/products';
import {LabelOptionsWithId} from './options';

interface ProductI {
  _id: string;
  rating: number;
  image: string[];
  title: string;
  description: LabelOptionsWithId[];
  characteristics: LabelOptionsWithId[];
  subCategory: number;
  category: number;
  createdAt: Date;
  price: number;
  discount?: number;
  tags?: number[];
}

interface GetProductsResponse {
  results: ProductI[];
  totalPages: number;
  totalItems: number;
}

interface GetProductsQuantityByCategories {
  _id: number;
  quantity: number;
}

type UpdateWishlistMutation = typeof useUpdateWishlistMutation;

export {
  type GetProductsQuantityByCategories,
  type GetProductsResponse,
  type ProductI,
  type UpdateWishlistMutation
};
