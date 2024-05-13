import {useParams} from 'react-router-dom';
import {PageWrapper, ProductDetails, RecommendedProductList} from '@/shared/ui';
import {
  useGetProductByIdQuery,
  useGetProductsQuery,
  useUpdateWishlistMutation
} from '@/slices/products';

const ProductDetailsPage = () => {
  const {id} = useParams();
  const {data: recommendedProducts, isLoading: recommendedProductsIsLoading} =
    useGetProductsQuery();
  const {data, isLoading} = useGetProductByIdQuery(id);

  return (
    <PageWrapper isLoading={isLoading}>
      <ProductDetails onUpdateWishlist={useUpdateWishlistMutation} {...data!} />
      <RecommendedProductList
        onUpdateWishlist={useUpdateWishlistMutation}
        products={recommendedProducts?.results || []}
        isLoading={recommendedProductsIsLoading}
      />
    </PageWrapper>
  );
};

export default ProductDetailsPage;
