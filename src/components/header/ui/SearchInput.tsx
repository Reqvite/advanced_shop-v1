import {ReactElement, useEffect} from 'react';
import {createSearchParams, URLSearchParamsInit, useLocation, useNavigate} from 'react-router-dom';
import {getRouteMain} from '@/app/providers/AppRouter/routeConfig';
import {categoriesOptions} from '@/shared/lib/helpers/enumLabelResolver/options';
import {useFilter} from '@/shared/lib/hooks';
import {SearchFilterModel} from '@/shared/models/searchFilterModel';
import {FormOption, FormVariantsEnum} from '@/shared/types/form';
import {Filter, Flex} from '@/shared/ui';
import {actions as filterActions} from '@/slices/filter';

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

export const SearchInput = (): ReactElement => {
  const {pathname} = useLocation();
  const navigate = useNavigate();
  const {paramsLength, paramsWithoutShowMore, onResetCategory} = useFilter();
  const isNavigate = pathname !== getRouteMain();

  const defaultValues = {
    search: new SearchFilterModel({
      model: paramsWithoutShowMore,
      categories: paramsWithoutShowMore?.categories
    })
  };

  useEffect(() => {
    if (paramsWithoutShowMore?.categories && paramsWithoutShowMore.category) {
      onResetCategory();
    }
  }, [onResetCategory, paramsWithoutShowMore?.categories, paramsWithoutShowMore.category]);

  useEffect(() => {
    if (isNavigate && Object.keys(paramsWithoutShowMore).includes('search')) {
      navigate({
        pathname: getRouteMain(),
        search: createSearchParams(
          paramsWithoutShowMore as unknown as URLSearchParamsInit
        ).toString()
      });
    }
  }, [isNavigate, navigate, paramsLength, paramsWithoutShowMore]);

  return (
    <Flex justifyContent="center">
      <Filter
        options={options}
        defaultValues={defaultValues}
        withDrawer={false}
        values={defaultValues}
        filterAction={filterActions.setSearchInput}
      />
    </Flex>
  );
};
