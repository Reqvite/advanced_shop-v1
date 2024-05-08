import {ReactElement} from 'react';
import {skeletonLength} from '@/shared/const/product.const';
import {useFilter, useMediaQuery} from '@/shared/lib/hooks';
import {ProductFilterModel} from '@/shared/models/productFilterModel';
import {ProductI} from '@/shared/types/product';
import {
  Filter,
  List,
  PageWrapper,
  Pagination,
  ProductCard,
  ProductCardSkeleton,
  Sort,
  StickyContentLayout
} from '@/shared/ui';
import {useGetProductsQuantityByCategoriesQuery, useGetProductsQuery} from '@/slices/products';
import {filterOptions, sortFilterOptions} from './model/options';

const MainPage = (): ReactElement => {
  const {filterKeys, decodeParams} = useFilter<ProductFilterModel>();
  const {data, isLoading, isFetching} = useGetProductsQuery(filterKeys);
  const {data: categoriesQuantity = []} = useGetProductsQuantityByCategoriesQuery();
  const isMobile = useMediaQuery('md');
  const defaultValues = new ProductFilterModel(decodeParams);
  const mainFilterOptions = filterOptions({categoriesQuantity, isMobile});

  return (
    <PageWrapper isLoading={isLoading}>
      {!isMobile && <Sort options={sortFilterOptions} defaultValues={{sort: defaultValues.sort}} />}
      <StickyContentLayout
        left={<Filter options={mainFilterOptions} defaultValues={defaultValues} />}
        content={
          <List<ProductI>
            items={data?.results || []}
            renderItem={ProductCard}
            skeleton={<ProductCardSkeleton />}
            skeletonLength={skeletonLength}
            isLoading={isFetching}
          />
        }
        bottom={<Pagination defaultPage={1} count={data?.totalPages} total={data?.totalItems} />}
      />
    </PageWrapper>
  );
};

export default MainPage;
