import {ReactElement} from 'react';
import {categoriesOptions} from '@/shared/lib/helpers/enumLabelResolver/options';
import {useFilter} from '@/shared/lib/hooks';
import {SearchFilterModel} from '@/shared/models/searchFilterModel';
import {FormOption, FormVariantsEnum} from '@/shared/types/form';
import {Filter, Flex} from '@/shared/ui';

const options: FormOption<FormVariantsEnum>[] = [
  {
    id: 'search',
    variant: FormVariantsEnum.InputWithSelect,
    name: 'Search',
    options: categoriesOptions,
    inputName: 'search',
    selectName: 'category'
  }
];

type SearchInputParams = {category: number; search: string};

export const SearchInput = (): ReactElement => {
  const {decodeParams} = useFilter<SearchInputParams>();

  return (
    <Flex justifyContent="center">
      <Filter
        options={options}
        defaultValues={{search: new SearchFilterModel({model: decodeParams})}}
        withDrawer={false}
        resetOtherFilterKeys
      />
    </Flex>
  );
};
