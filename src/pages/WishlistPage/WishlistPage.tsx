import {ReactElement} from 'react';
import {ProductsList} from '@/components/productsList';
import {useGetUserWishlistQuery} from '@/slices/products';

const WishlistPage = (): ReactElement => {
  return <ProductsList title="Wishlist" useGetProducts={useGetUserWishlistQuery} withPagination />;
};

export default WishlistPage;
