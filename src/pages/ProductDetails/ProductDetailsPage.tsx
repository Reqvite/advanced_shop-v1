import {useParams} from 'react-router-dom';
import {useCartAndWishlistActions} from '@/shared/lib/hooks/useCartAndWishlistActions.hook';
import {NoContentBox, PageWrapper, ProductDetails, RecommendedProductList} from '@/shared/ui';
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

  if (!data && !isLoading) {
    return <NoContentBox title="Product not found" />;
  }

  return (
    <PageWrapper isLoading={isLoading}>
      {data && <ProductDetails useActions={useCartAndWishlistActions} {...data} />}
      <RecommendedProductList
        onUpdateWishlist={useUpdateWishlistMutation}
        products={recommendedProducts?.results || []}
        isLoading={recommendedProductsIsLoading}
      />
    </PageWrapper>
  );
};

export default ProductDetailsPage;
