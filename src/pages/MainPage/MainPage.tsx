import {ReactElement} from 'react';
import {Filter} from '@/components/filter';
import {brandsOptions} from '@/shared/lib/helpers/enumLabelResolver/options';
import {useFilter} from '@/shared/lib/hooks';
import {FormOption, FormVariantsEnum} from '@/shared/types/form';
import {ProductI} from '@/shared/types/product';
import {
  List,
  PageWrapper,
  Pagination,
  ProductCard,
  ProductCardSkeleton,
  Rating,
  StickyContentLayout
} from '@/shared/ui';
import {useGetProductsQuery} from '@/slices/products';

const options: FormOption<FormVariantsEnum>[] = [
  {
    id: 'rating',
    variant: FormVariantsEnum.Slider,
    name: 'Rating',
    min: 1,
    max: 5,
    component: Rating
  },
  {id: 'price', variant: FormVariantsEnum.SliderWithInput, name: 'Price', max: 50000},
  {
    id: 'brand',
    variant: FormVariantsEnum.CheckboxGroup,
    name: 'Brand',
    options: brandsOptions
  }
];

const MainPage = (): ReactElement => {
  const {filterKeys, decodeParams} = useFilter();
  const {data, isLoading, isFetching} = useGetProductsQuery(filterKeys);
  const defaultValues = {
    brand: decodeParams.brand || [],
    price: decodeParams.price || [1, 50000],
    rating: decodeParams.rating || 1
  };

  return (
    <PageWrapper isLoading={isLoading}>
      <StickyContentLayout
        left={<Filter options={options} defaultValues={defaultValues} />}
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
