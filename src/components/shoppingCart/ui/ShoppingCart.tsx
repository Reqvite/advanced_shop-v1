import {Box} from '@mui/material';
import {ReactElement, useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {useAuth, useMediaQuery} from '@/shared/lib/hooks';
import {useCartActions} from '@/shared/lib/hooks/useCartActions.hook';
import {shoppingCartSchema} from '@/shared/lib/yup/shoppingCart.schema';
import {ShoppingCartModel} from '@/shared/models/shoppingCartModel';
import {priceService} from '@/shared/services';
import {Flex, PageWrapper} from '@/shared/ui';
import {useGetCartQuery} from '@/slices/cart';
import {useGetCountriesQuery, useGetCountryCityMutation} from '@/slices/location';
import {additionalInfoOptions, confirmationOptions, getShoppingCartOptions} from '../model/options';
import {AdditionalInfo} from './AdditionalInfo';
import {BillingInfo} from './BillingInfo';
import {Confirmation} from './Confirmation';
import {OrderSummary} from './OrderSummary';

type Props = {
  tax?: number;
};

export const ShoppingCart = ({tax = 15}: Props): ReactElement | null => {
  const {user} = useAuth();
  const {handleSubmit, control, watch, resetField} = useForm<ShoppingCartModel>({
    resolver: shoppingCartSchema,
    defaultValues: new ShoppingCartModel({user})
  });

  const country = watch('country');

  const isMobile = useMediaQuery('md');
  const leftBoxWidth = isMobile ? '100%' : '55%';
  const direction = isMobile ? 'column' : 'row';

  const {data: products = [], isLoading, isFetching} = useGetCartQuery();
  const {data: countries, isLoading: countriesIsLoading} = useGetCountriesQuery();
  const [getCities, {data: cities, isLoading: citiesIsLoading}] = useGetCountryCityMutation();
  const {onCompleteOrder, completeOrderIsLoading} = useCartActions();

  const cartIsEmpty = products?.length !== 0;

  useEffect(() => {
    if (country) {
      getCities({country});
    }
    resetField('city');
  }, [country, getCities, resetField]);

  if (!user) return null;

  const options = getShoppingCartOptions({
    countryOptions: countries,
    citiesOptions: cities,
    isCitiesSelectDisabled: !citiesIsLoading && !country
  });

  const handleFormSubmit = handleSubmit((data): void => {
    onCompleteOrder({
      orderInformation: data as ShoppingCartModel,
      products: user?.cart,
      totalPrice: priceService.getTotal(products, tax)
    });
  });

  return (
    <PageWrapper isLoading={isLoading || countriesIsLoading}>
      <Flex flexDirection={direction} justifyContent="center" gap={3}>
        {cartIsEmpty && (
          <Box width={leftBoxWidth} component="form" onSubmit={handleFormSubmit}>
            <BillingInfo options={options} control={control} />
            <AdditionalInfo options={additionalInfoOptions} control={control} />
            <Confirmation
              options={confirmationOptions}
              control={control}
              isLoading={completeOrderIsLoading}
              onSubmit={handleFormSubmit}
            />
          </Box>
        )}
        <OrderSummary cartIsEmpty={cartIsEmpty} items={products} isLoading={isFetching} tax={tax} />
      </Flex>
    </PageWrapper>
  );
};
