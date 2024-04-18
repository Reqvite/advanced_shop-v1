import {Typography} from '@mui/material';
import {ReactElement} from 'react';
import {getDiscountPrice, getFixedPrice} from '@/shared/lib/helpers';

type Props = {
  price: number;
  discount?: number;
  currency?: string;
};

export const PriceText = ({price, discount, currency = 'USD'}: Props): ReactElement => {
  return (
    <>
      <Typography>
        {getFixedPrice(price)} {currency}
      </Typography>
      {discount && <Typography>{getDiscountPrice({price, discount})}</Typography>}
    </>
  );
};
