import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {IconButton} from '@mui/material';
import {ReactElement} from 'react';

export const CartButton = (): ReactElement => {
  return (
    <IconButton aria-label="Cart">
      <ShoppingBasketIcon fontSize="inherit" />
    </IconButton>
  );
};
