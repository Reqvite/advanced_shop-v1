import {Box, Typography} from '@mui/material';
import {ReactElement} from 'react';
import {priceService} from '@/shared/services';

type Props = {
  price: number;
  discount?: number;
  quantity?: number;
  currency?: string;
  priceColor?: string;
};

export const PriceText = ({
  price,
  discount = 0,
  quantity = 1,
  currency = 'USD',
  priceColor
}: Props): ReactElement => {
  const totalPrice = quantity * price;
  return (
    <Box>
      <Typography variant="h5" color={priceColor}>
        {discount
          ? priceService.getDiscountPrice({price: totalPrice, discount})
          : priceService.getFixedPrice(totalPrice)}{' '}
        {currency}
      </Typography>
      {discount > 0 && (
        <Typography mt="2px" variant="body2" color="grey.200" sx={{textDecoration: 'line-through'}}>
          {priceService.getFixedPrice(totalPrice)}
        </Typography>
      )}
    </Box>
  );
};
