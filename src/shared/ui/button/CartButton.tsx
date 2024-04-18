import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {IconButton, IconButtonProps} from '@mui/material';
import {ReactElement} from 'react';

type Props = IconButtonProps;

export const CartButton = (props: Props): ReactElement => {
  return (
    <IconButton aria-label="Cart" {...props}>
      <ShoppingBasketIcon fontSize="inherit" />
    </IconButton>
  );
};
