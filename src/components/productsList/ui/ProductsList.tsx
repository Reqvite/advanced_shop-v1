import {Typography} from '@mui/material';
import {ReactElement, useEffect, useMemo} from 'react';
import {skeletonLength} from '@/shared/const/product.const';
import {useFilter} from '@/shared/lib/hooks';
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

type Props = {
  title?: string;
  useGetProducts: GetUserWishlistQuery | GetProductsQuery;
  withFilter?: boolean;
  withSort?: boolean;
  withPagination?: boolean;
  emptyListTitle?: string;
};

export const ProductsList = ({
  title = 'All products',
  useGetProducts,
  withFilter,
  withSort,
  withPagination,
  emptyListTitle
}: Props): ReactElement => {
  const {requestParams, decodeParams, onResetFilter} = useFilter<ProductFilterModel>();
  const {data, isLoading, isFetching} = useGetProducts(
    Object.keys(requestParams)?.length === 1 ? {} : requestParams
  );
  const {data: categoriesQuantity = []} = useGetProductsQuantityByCategoriesQuery();

  const defaultValues = useMemo(
    () => new ProductFilterModel({model: decodeParams, minMaxPrices: data?.minMaxPrices}),
    [data?.minMaxPrices, decodeParams]
  );
  const memoizedFilterOptions = useMemo(
    () =>
      filterOptions({
        categoriesQuantity,
        minPriceFromApi: data?.minMaxPrices[0],
        maxPriceFromApi: data?.minMaxPrices[1]
      }),
    [categoriesQuantity, data?.minMaxPrices]
  );
  const memoizedDefaultValues = useMemo(
    () => getFilterDefaultValues({defaultValues}),
    [defaultValues]
  );

  const isLastPage = data?.totalPages === decodeParams?.page || data?.totalPages === 1;

  useEffect(() => {
    if (requestParams?.page !== 1 && data?.results.length === 0) {
      onResetFilter({data: {page: 1}});
    }
  }, [data?.results.length, onResetFilter, requestParams?.page]);

  return (
    <PageWrapper isLoading={isLoading}>
      <Typography variant="h2" mb={3}>
        {title}
      </Typography>
      {withSort && <Sort options={sortFilterOptions} defaultValues={{sort: defaultValues.sort}} />}
      <StickyContentLayout
        left={
          withFilter && (
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
            itemStyle={{justifyContent: 'center'}}
            emptyListTitle={emptyListTitle}
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
