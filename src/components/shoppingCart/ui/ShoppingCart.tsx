import {Box} from '@mui/material';
import {ReactElement, useEffect, useMemo} from 'react';
import {useForm} from 'react-hook-form';
import {useAuth, useMediaQuery} from '@/shared/lib/hooks';
import {ShoppingCartModel} from '@/shared/models/shoppingCartModel';
import {CountryTransformI} from '@/shared/types/country';
import {Flex, PageWrapper} from '@/shared/ui';
import {useGetCartQuery} from '@/slices/cart';
import {useGetCountriesQuery} from '@/slices/country';
import {mapCities} from '../model/mapCities';
import {getShoppingCartOptions} from '../model/options';
import {AdditionalInfo} from './AdditionalInfo';
import {BillingInfo} from './BillingInfo';
import {Confirmation} from './Confirmation';
import {OrderSummary} from './OrderSummary';

export const ShoppingCart = (): ReactElement => {
  const {user} = useAuth();
  const {handleSubmit, control, watch, resetField} = useForm({
    defaultValues: {...new ShoppingCartModel({user})}
  });
  const country = watch('country');

  const isMobile = useMediaQuery('md');
  const leftBoxWidth = isMobile ? '100%' : '55%';
  const direction = isMobile ? 'column' : 'row';

  const {data = [], isLoading, isFetching} = useGetCartQuery();
  const {data: countries = {} as CountryTransformI} = useGetCountriesQuery();

  const citiesMap = useMemo(() => mapCities(countries?.data, country), [countries, country]);
  const options = getShoppingCartOptions({
    countryOptions: countries.transformedData,
    citiesOptions: citiesMap,
    isCitiesSelectDisabled: !country
  });

  const handleFormSubmit = handleSubmit((data) => {
    console.log(data);
  });

  useEffect(() => {
    resetField('city');
  }, [country, resetField]);

  return (
    <PageWrapper isLoading={isLoading}>
      <Flex flexDirection={direction} gap={2}>
        <Box width={leftBoxWidth} component="form" onSubmit={handleFormSubmit}>
          <BillingInfo options={options} control={control} />
          <AdditionalInfo />
          <Confirmation />
        </Box>
        <OrderSummary items={data} isLoading={isFetching} />
      </Flex>
    </PageWrapper>
  );
};
