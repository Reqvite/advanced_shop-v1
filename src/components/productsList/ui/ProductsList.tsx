import {Typography} from '@mui/material';
import {ReactElement, useEffect, useMemo} from 'react';
import {skeletonLength} from '@/shared/const/product.const';
import {useFilter, useMediaQuery} from '@/shared/lib/hooks';
import {ProductFilterModel} from '@/shared/models/productFilterModel';
import {GetProductsQuery, GetUserWishlistQuery, ProductI} from '@/shared/types/product';
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
import {
  useGetProductsQuantityByCategoriesQuery,
  useUpdateWishlistMutation
} from '@/slices/products';
import {getFilterDefaultValues} from '../model/helpers';
import {filterOptions, sortFilterOptions} from '../model/options';
import {MobileFilters} from './MobileFilters';

type Props = {
  title?: string;
  useGetProducts: GetUserWishlistQuery | GetProductsQuery;
  withFilter?: boolean;
  withPagination?: boolean;
  emptyListTitle?: string;
};

export const ProductsList = ({
  title = 'All products',
  useGetProducts,
  withFilter,
  withPagination,
  emptyListTitle
}: Props): ReactElement => {
  const isMobile = useMediaQuery('md');
  const {requestParams, decodeParams, onResetFilter} = useFilter<ProductFilterModel>();
  const {data, isLoading, isFetching} = useGetProducts(
    Object.keys(requestParams)?.length === 1 ? {} : requestParams
  );
  const {data: categoriesQuantity = []} = useGetProductsQuantityByCategoriesQuery(null, {
    skip: !withFilter
  });
  const defaultValues = useMemo(
    () => new ProductFilterModel({model: decodeParams, minMaxPrices: data?.minMaxPrices}),
    [data?.minMaxPrices, decodeParams]
  );
  const memoizedFilterOptions = useMemo(
    () =>
      withFilter
        ? filterOptions({
            categoriesQuantity,
            minPriceFromApi: data?.minMaxPrices[0],
            maxPriceFromApi: data?.minMaxPrices[1]
          })
        : null,
    [categoriesQuantity, data?.minMaxPrices, withFilter]
  );
  const memoizedDefaultValues = useMemo(
    () => (withFilter && defaultValues ? getFilterDefaultValues({defaultValues}) : null),
    [defaultValues, withFilter]
  );

  const isLastPage = data?.totalPages === decodeParams?.page || data?.totalPages === 1;
  const hasFilters = withFilter && memoizedFilterOptions && memoizedDefaultValues;

  useEffect(() => {
    if (requestParams?.page !== 1 && data?.totalPages && data?.results.length === 0) {
      onResetFilter({data: {page: 1}});
    }
  }, [data?.results.length, data?.totalPages, onResetFilter, requestParams?.page]);

  return (
    <PageWrapper isLoading={isLoading}>
      <Typography variant="h2" mb={3}>
        {title}
      </Typography>
      {hasFilters && defaultValues.sort && (
        <MobileFilters
          filterOptions={memoizedFilterOptions}
          resetValues={getFilterDefaultValues({
            defaultValues: new ProductFilterModel({minMaxPrices: data?.minMaxPrices})
          })}
          filterDefaultValues={memoizedDefaultValues}
          sortOptions={sortFilterOptions}
          sortDefaultValues={{sort: defaultValues.sort}}
        />
      )}
      {withFilter && !isMobile && defaultValues.sort && (
        <Sort options={sortFilterOptions} defaultValues={{sort: defaultValues.sort}} />
      )}
      <StickyContentLayout
        left={
          hasFilters &&
          !isMobile && (
            <Filter
              options={memoizedFilterOptions}
              resetValues={getFilterDefaultValues({
                defaultValues: new ProductFilterModel({minMaxPrices: data?.minMaxPrices})
              })}
              defaultValues={memoizedDefaultValues}
              resetPage
              withResetButton
            />
          )
        }
        content={
          <List<ProductI>
            items={data?.results || []}
            renderItem={(product) => (
              <ProductCard {...product} onUpdateWishlist={useUpdateWishlistMutation} />
            )}
            skeleton={<ProductCardSkeleton />}
            skeletonLength={data?.results.length || skeletonLength}
            isLoading={isFetching}
            itemStyle={{justifyContent: 'center', width: isMobile ? '300px' : '100%'}}
            emptyListTitle={emptyListTitle}
            row={isMobile}
          />
        }
        bottom={
          withPagination && (
            <Pagination
              page={decodeParams.page || defaultValues.page}
              count={data?.totalPages}
              total={data?.results.length}
              isLastPage={isLastPage}
            />
          )
        }
      />
    </PageWrapper>
  );
};
