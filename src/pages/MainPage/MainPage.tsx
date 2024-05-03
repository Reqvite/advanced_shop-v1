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
import {useGetProductsQuery} from '@/slices/products';
import {filterAndSortOptions, options, sortFilterOptions} from './model/options';

const MainPage = (): ReactElement => {
  const {filterKeys, decodeParams} = useFilter();
  const {data, isLoading, isFetching} = useGetProductsQuery(filterKeys);
  const isMobile = useMediaQuery('md');
  const defaultValues = new ProductFilterModel(decodeParams as unknown as ProductFilterModel);
  const mainFilterOptions = isMobile ? filterAndSortOptions : options;

  return (
    <PageWrapper isLoading={isLoading}>
      <Sort options={sortFilterOptions} defaultValues={{sort: defaultValues.sort}} />
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
