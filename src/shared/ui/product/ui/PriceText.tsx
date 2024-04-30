import {Box, Typography} from '@mui/material';
import {ReactElement} from 'react';
import {priceService} from '@/shared/services';

type Props = {
  price: number;
  discount?: number;
  currency?: string;
};

export const PriceText = ({price, discount, currency = 'USD'}: Props): ReactElement => {
  return (
    <Box>
      <Typography variant="h5">
        {discount
          ? priceService.getDiscountPrice({price, discount})
          : priceService.getFixedPrice(price)}{' '}
        {currency}
      </Typography>
      {discount !== 0 && (
        <Typography mt="2px" variant="body2" color="grey.200" sx={{textDecoration: 'line-through'}}>
          {priceService.getFixedPrice(price)}
        </Typography>
      )}
    </Box>
  );
};
