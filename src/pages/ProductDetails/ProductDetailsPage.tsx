import {useParams} from 'react-router-dom';
import {ProductDetails, RecommendedProductList} from '@/shared/ui';
import {useGetProductByIdQuery, useGetProductsQuery} from '@/slices/products';

const ProductDetailsPage = () => {
  const {id} = useParams();
  const {data: recommendedProducts, isLoading: recommendedProductsIsLoading} =
    useGetProductsQuery();
  const {data, isLoading} = useGetProductByIdQuery(id);

  if (isLoading) {
    return null;
  }

  return (
    <>
      <ProductDetails {...data!} />
      <RecommendedProductList
        products={recommendedProducts?.results || []}
        isLoading={recommendedProductsIsLoading}
      />
    </>
  );
};

export default ProductDetailsPage;
