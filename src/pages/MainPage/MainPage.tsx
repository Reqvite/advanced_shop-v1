import {ReactElement} from 'react';
import {ProductsList} from '@/components/productsList';
import {useGetProductsQuery} from '@/slices/products/products.rtk';

const MainPage = (): ReactElement => {
  return <ProductsList useGetProducts={useGetProductsQuery} withFilter withPagination />;
};

export default MainPage;
