import {Box} from '@mui/material';
import {ReactElement} from 'react';
import {checkoutStyles} from '@/app/theme/styles';
import {Title} from '@/shared/ui';

export const OrderSummary = (): ReactElement => {
  return (
    <Box sx={checkoutStyles.orderSummaryBox}>
      <Title
        title="Order Summary"
        description="Price can change depending on shipping method and taxes of your state."
      />
    </Box>
  );
};
