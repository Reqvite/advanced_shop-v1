import {ReactElement} from 'react';
import {ProductsList} from '@/components/productsList';
import {useGetProductsQuery} from '@/slices/products';

const WishlistPage = (): ReactElement => {
  return <ProductsList title="Wishlist" useGetProducts={useGetProductsQuery} withPagination />;
};

export default WishlistPage;
