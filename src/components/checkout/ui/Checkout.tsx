import {Box} from '@mui/material';
import {useMediaQuery} from '@/shared/lib/hooks';
import {Flex, PageWrapper} from '@/shared/ui';
import {AdditionalInfo} from './AdditionalInfo';
import {BillingInfo} from './BillingInfo';
import {Confirmation} from './Confirmation';
import {OrderSummary} from './OrderSummary';

export const Checkout = () => {
  const isMobile = useMediaQuery('md');
  const leftBoxWidth = isMobile ? '100%' : '55%';
  const direction = isMobile ? 'column' : 'row';

  return (
    <PageWrapper>
      <Flex flexDirection={direction}>
        <Box width={leftBoxWidth}>
          <BillingInfo />
          <AdditionalInfo />
        </Box>
        <OrderSummary />
      </Flex>
      <Confirmation />
    </PageWrapper>
  );
};
