import {useEffect, useState} from 'react';
import {ReactElement} from 'react';
import {FieldValues} from 'react-hook-form';
import {productsListStyles} from '@/app/theme/styles';
import {useMediaQuery} from '@/shared/lib/hooks';
import {ProductFilterModel} from '@/shared/models/productFilterModel';
import {FormOption, FormVariantsEnum} from '@/shared/types/form';
import {Filter, Flex, Sort} from '@/shared/ui';

type Props<T> = {
  filterOptions: FormOption<FormVariantsEnum>[];
  resetValues?: T;
  filterDefaultValues: T;
  sortOptions: FormOption<FormVariantsEnum>[];
  sortDefaultValues: Pick<ProductFilterModel, 'sort'>;
};

export const MobileFilters = <T extends FieldValues>({
  filterOptions,
  resetValues,
  filterDefaultValues,
  sortOptions,
  sortDefaultValues
}: Props<T>): ReactElement | null => {
  const isMobile = useMediaQuery('md');
  const [isSticky, setIsSticky] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return isMobile ? (
    <Flex sx={productsListStyles.mobileFiltersBox(isSticky)}>
      <Filter
        options={filterOptions}
        resetValues={resetValues}
        defaultValues={filterDefaultValues}
        resetPage
        withResetButton
      />
      <Sort options={sortOptions} defaultValues={sortDefaultValues} sx={{padding: 0}} />
    </Flex>
  ) : null;
};
