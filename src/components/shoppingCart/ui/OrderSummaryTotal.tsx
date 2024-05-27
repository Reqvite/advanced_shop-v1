import {Box, Stack, Typography} from '@mui/material';
import {ReactElement} from 'react';
import {priceService} from '@/shared/services';
import {CartProductI} from '@/shared/types/product';
import {Flex} from '@/shared/ui';

type Props = {
  items: CartProductI[];
  tax: number;
};

export const OrderSummaryTotal = ({items, tax}: Props): ReactElement => {
  const subTotal = priceService.getSubtotal(items);
  const taxTotal = priceService.getTax({price: subTotal, tax});
  const total = priceService.getFixedPrice(subTotal + taxTotal);

  return (
    <Stack gap={1} mt={6}>
      <Flex justifyContent="space-between">
        <Typography fontWeight={600}>Subtotal</Typography>
        <Typography fontWeight={600}>{subTotal} USD</Typography>
      </Flex>
      <Flex justifyContent="space-between">
        <Typography fontWeight={600}>Tax {tax} %</Typography>
        <Typography fontWeight={600}>{taxTotal} USD</Typography>
      </Flex>
      <Flex justifyContent="space-between" alignItems="center">
        <Box>
          <Typography fontWeight={600}>Total Order</Typography>
          <Typography fontWeight={600} color="primary.main">
            Guaranteed delivery day: June 12, 2024
          </Typography>
        </Box>
        <Typography component="p" fontWeight={600} variant="h3" color="primary.main">
          {total} USD
        </Typography>
      </Flex>
    </Stack>
  );
};
