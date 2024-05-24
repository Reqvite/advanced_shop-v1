import {Box} from '@mui/material';
import {useMediaQuery} from '@/shared/lib/hooks';
import {Flex, PageWrapper} from '@/shared/ui';
import {useGetCartQuery} from '@/slices/cart';
import {AdditionalInfo} from './AdditionalInfo';
import {BillingInfo} from './BillingInfo';
import {Confirmation} from './Confirmation';
import {OrderSummary} from './OrderSummary';

export const ShoppingCart = () => {
  const {data = [], isLoading, isFetching} = useGetCartQuery();
  const isMobile = useMediaQuery('md');
  const leftBoxWidth = isMobile ? '100%' : '55%';
  const direction = isMobile ? 'column' : 'row';

  return (
    <PageWrapper isLoading={isLoading}>
      <Flex flexDirection={direction}>
        <Box width={leftBoxWidth}>
          <BillingInfo />
          <AdditionalInfo />
        </Box>
        <OrderSummary items={data} isLoading={isFetching} />
      </Flex>
      <Confirmation />
    </PageWrapper>
  );
};
