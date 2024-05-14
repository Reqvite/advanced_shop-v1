import {ReactElement} from 'react';
import {ProductsList} from '@/components/productsList';
import {useGetProductsQuery} from '@/slices/products';

const MainPage = (): ReactElement => {
  return <ProductsList useGetProducts={useGetProductsQuery} withFilter withSort withPagination />;
};

export default MainPage;
