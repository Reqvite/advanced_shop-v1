import {ReactElement} from 'react';
import {Filter} from '@/components/filter';
import {FormOption, FormVariantsEnum} from '@/shared/types/form';
import {ProductI} from '@/shared/types/product';
import {List, PageWrapper, Pagination, ProductCard, StickyContentLayout} from '@/shared/ui';
import {useGetProductsQuery} from '@/slices/products';

const options: FormOption<FormVariantsEnum>[] = [
  // {id: 'note', variant: FilterVariantsEnum.Input, name: 'Note'},
  {id: 'price', variant: FormVariantsEnum.PriceRange, name: 'Range'},
  {
    id: 'check',
    variant: FormVariantsEnum.Checkbox,
    name: 'check'
  },
  {
    id: 'group',
    variant: FormVariantsEnum.CheckboxGroup,
    name: 'Sort',
    options: [
      {label: 'Trinity', value: 1},
      {label: 'Morpheus', value: 2},
      {label: 'Neo', value: 3},
      {label: 'Tank', value: 4},
      {label: 'Dozer', value: 5}
    ]
  }
];

const MainPage = (): ReactElement => {
  const {data, isLoading} = useGetProductsQuery();

  return (
    <PageWrapper isLoading={isLoading}>
      <StickyContentLayout
        left={
          <Filter
            options={options}
            defaultValues={{
              check: false,
              note: '',
              sort: 1,
              group: [1, 2],
              price: [1, 500]
            }}
          />
        }
        content={<List<ProductI> items={data?.results || []} renderItem={ProductCard} />}
        bottom={<Pagination defaultPage={1} count={data?.totalPages} total={data?.totalItems} />}
      />
    </PageWrapper>
  );
};

export default MainPage;
