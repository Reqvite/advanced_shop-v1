import {Box, Typography} from '@mui/material';
import {ReactElement} from 'react';
import {getDiscountPrice, getFixedPrice} from '@/shared/lib/helpers';

type Props = {
  price: number;
  discount?: number;
  currency?: string;
};

export const PriceText = ({price, discount, currency = 'USD'}: Props): ReactElement => {
  return (
    <Box>
      <Typography fontWeight={600}>
        {discount ? getDiscountPrice({price, discount}) : getFixedPrice(price)} {currency}
      </Typography>
      {discount && (
        <Typography mt="2px" variant="body2" color="grey.200" sx={{textDecoration: 'line-through'}}>
          {price}
        </Typography>
      )}
    </Box>
  );
};
