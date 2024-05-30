import {useParams} from 'react-router-dom';
import {useCartActions} from '@/shared/lib/hooks/useCartActions.hook';
import {useWishlistActions} from '@/shared/lib/hooks/useWishlistActions.hook';
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
      {data && (
        <ProductDetails
          useWishlistActions={useWishlistActions}
          useCartActions={useCartActions}
          {...data}
        />
      )}
      <RecommendedProductList
        onUpdateWishlist={useUpdateWishlistMutation}
        products={recommendedProducts?.results || []}
        isLoading={recommendedProductsIsLoading}
      />
    </PageWrapper>
  );
};

export default ProductDetailsPage;
