import {ReactElement, useMemo} from 'react';
import {skeletonLength} from '@/shared/const/product.const';
import {useFilter} from '@/shared/lib/hooks';
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
import {getFilterDefaultValues} from './model/helpers';
import {filterOptions, sortFilterOptions} from './model/options';

const MainPage = (): ReactElement => {
  const {filterKeys, decodeParams} = useFilter<ProductFilterModel>();
  const {data, isLoading, isFetching} = useGetProductsQuery(filterKeys);
  const {data: categoriesQuantity = []} = useGetProductsQuantityByCategoriesQuery();
  const defaultValues = useMemo(() => new ProductFilterModel(decodeParams), [decodeParams]);
  const memoizedFilterOptions = useMemo(
    () => filterOptions({categoriesQuantity}),
    [categoriesQuantity]
  );
  const memoizedDefaultValues = useMemo(
    () => getFilterDefaultValues({defaultValues}),
    [defaultValues]
  );

  return (
    <PageWrapper isLoading={isLoading}>
      <Sort options={sortFilterOptions} defaultValues={{sort: defaultValues.sort}} />
      <StickyContentLayout
        left={
          <Filter options={memoizedFilterOptions} defaultValues={memoizedDefaultValues} resetPage />
        }
        content={
          <List<ProductI>
            items={data?.results || []}
            renderItem={ProductCard}
            skeleton={<ProductCardSkeleton />}
            skeletonLength={skeletonLength}
            isLoading={isFetching}
            itemStyle={{justifyContent: 'center'}}
          />
        }
        bottom={
          <Pagination
            page={decodeParams.page || defaultValues.page}
            count={data?.totalPages}
            total={data?.totalItems}
          />
        }
      />
    </PageWrapper>
  );
};

export default MainPage;
