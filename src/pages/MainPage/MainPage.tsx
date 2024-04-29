import {ReactElement} from 'react';
import {useSearchParams} from 'react-router-dom';
import {Filter} from '@/components/filter';
import {decodeSearchParams} from '@/shared/lib/helpers';
import {categoriesOptions} from '@/shared/lib/helpers/enumLabelResolver/options';
import {useAppSelector} from '@/shared/lib/hooks';
import {FormOption, FormVariantsEnum} from '@/shared/types/form';
import {ProductI} from '@/shared/types/product';
import {
  List,
  PageWrapper,
  Pagination,
  ProductCard,
  ProductCardSkeleton,
  StickyContentLayout
} from '@/shared/ui';
import {selectFilter} from '@/slices/filter';
import {useGetProductsQuery} from '@/slices/products';

const options: FormOption<FormVariantsEnum>[] = [
  {id: 'price', variant: FormVariantsEnum.PriceRange, name: 'Price'},
  {
    id: 'category',
    variant: FormVariantsEnum.CheckboxGroup,
    name: 'Category',
    options: categoriesOptions
  }
];

const MainPage = (): ReactElement => {
  const [searchParams] = useSearchParams();
  const filter = useAppSelector(selectFilter);
  const decodeParams = decodeSearchParams(searchParams);
  const {data, isLoading, isFetching, refetch} = useGetProductsQuery(filter);
  const defaultValues = {
    category: decodeParams.category || [],
    price: decodeParams.price || [1, 50000]
  };

  return (
    <PageWrapper isLoading={isLoading}>
      <StickyContentLayout
        left={<Filter options={options} defaultValues={defaultValues} onChange={refetch} />}
        content={
          <List<ProductI>
            items={data?.results || []}
            renderItem={ProductCard}
            skeleton={<ProductCardSkeleton />}
            skeletonLength={5}
            isLoading={isFetching}
          />
        }
        bottom={<Pagination defaultPage={1} count={data?.totalPages} total={data?.totalItems} />}
      />
    </PageWrapper>
  );
};

export default MainPage;
