import {ReactElement} from 'react';
import {brandsOptions} from '@/shared/lib/helpers/enumLabelResolver/options';
import {useFilter} from '@/shared/lib/hooks';
import {FormOption, FormVariantsEnum} from '@/shared/types/form';
import {ProductI} from '@/shared/types/product';
import {
  Filter,
  List,
  PageWrapper,
  Pagination,
  ProductCard,
  ProductCardSkeleton,
  Rating,
  StickyContentLayout
} from '@/shared/ui';
import {useGetProductsQuery} from '@/slices/products';

const defaultPrice = [1, 50000];
const defaultRating = [0, 5];
const skeletonLength = 5;

const options: FormOption<FormVariantsEnum>[] = [
  {
    id: 'rating',
    variant: FormVariantsEnum.Slider,
    name: 'Rating',
    min: defaultRating[0],
    max: defaultRating[1],
    component: Rating
  },
  {id: 'price', variant: FormVariantsEnum.SliderWithInput, name: 'Price', max: defaultPrice[1]},
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
    price: decodeParams.price || defaultPrice,
    rating: decodeParams.rating ?? defaultRating[1]
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
