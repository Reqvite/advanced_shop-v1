import {useUpdatedCartMutation} from '@/slices/cart';
import {
  useGetProductsQuery,
  useGetUserWishlistQuery,
  useUpdateWishlistMutation
} from '@/slices/products';
import {LabelOptionsWithId} from './options';

interface ImgI {
  _id: string;
  src: string;
}

interface ProductI {
  _id: string;
  rating: number;
  images: ImgI[];
  title: string;
  description: LabelOptionsWithId[];
  characteristics: LabelOptionsWithId[];
  subCategory: number;
  category: number;
  createdAt: Date;
  quantity: number;
  price: number;
  discount?: number;
  tags?: number[];
}

interface CartProductI extends ProductI {
  orderedQuantity: number;
}

interface GetProductsResponse {
  results: ProductI[];
  totalPages: number;
  totalItems: number;
  currentPage: number;
  minMaxPrices: number[];
}

interface GetProductsQuantityByCategories {
  _id: number;
  quantity: number;
}

type UpdateWishlistMutation = typeof useUpdateWishlistMutation;
type GetProductsQuery = typeof useGetProductsQuery;
type GetUserWishlistQuery = typeof useGetUserWishlistQuery;
type UpdateCartMutation = typeof useUpdatedCartMutation;

export {
  type CartProductI,
  type GetProductsQuantityByCategories,
  type GetProductsQuery,
  type GetProductsResponse,
  type GetUserWishlistQuery,
  type ImgI,
  type ProductI,
  type UpdateCartMutation,
  type UpdateWishlistMutation
};
