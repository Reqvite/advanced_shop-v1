import {ReactElement} from 'react';
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
  const {requestParams, decodeParams} = useFilter<ProductFilterModel>();
  const {data, isLoading, isFetching} = useGetProductsQuery(requestParams);
  const {data: categoriesQuantity = []} = useGetProductsQuantityByCategoriesQuery();
  const defaultValues = new ProductFilterModel(decodeParams);

  return (
    <PageWrapper isLoading={isLoading}>
      <Sort options={sortFilterOptions} defaultValues={{sort: defaultValues.sort}} />
      <StickyContentLayout
        left={
          <Filter
            options={filterOptions({categoriesQuantity})}
            defaultValues={getFilterDefaultValues({defaultValues})}
            resetValues={getFilterDefaultValues({defaultValues: new ProductFilterModel()})}
            resetPage
            withResetButton
          />
        }
        content={
          <List<ProductI>
            items={data?.results || []}
            renderItem={ProductCard}
            skeleton={<ProductCardSkeleton />}
            skeletonLength={skeletonLength}
            isLoading={isFetching}
            itemStyle={{justifyContent: 'center'}}
            // shouldScroll
          />
        }
        bottom={
          <Pagination
            page={decodeParams.page || defaultValues.page}
            count={data?.totalPages}
            total={data?.results.length}
            isLastPage={data?.totalPages === decodeParams.page}
          />
        }
      />
    </PageWrapper>
  );
};

export default MainPage;
