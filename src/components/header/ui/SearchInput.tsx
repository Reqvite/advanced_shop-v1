import {ReactElement, useEffect} from 'react';
import {createSearchParams, URLSearchParamsInit, useLocation, useNavigate} from 'react-router-dom';
import {getRouteMain} from '@/app/providers/AppRouter/routeConfig';
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
  const {pathname} = useLocation();
  const navigate = useNavigate();
  const {decodeParams, filterKeys, onResetFilter} = useFilter<SearchInputParams>();

  const defaultValues = {
    search: new SearchFilterModel({
      model: decodeParams,
      categories: filterKeys?.categories as number[]
    })
  };

  useEffect(() => {
    if (filterKeys.categories) {
      onResetFilter({category: ''}, {resetPage: false, disableShowMore: false});
    }
  }, [filterKeys, onResetFilter]);

  useEffect(() => {
    if (pathname !== getRouteMain() && Object.keys(decodeParams).length) {
      navigate({
        pathname: getRouteMain(),
        search: createSearchParams(decodeParams as unknown as URLSearchParamsInit).toString()
      });
    }
  }, [decodeParams, navigate, pathname]);

  return (
    <Flex justifyContent="center">
      <Filter
        options={options}
        defaultValues={defaultValues}
        withDrawer={false}
        resetOtherFilterKeys
        values={defaultValues}
      />
    </Flex>
  );
};
