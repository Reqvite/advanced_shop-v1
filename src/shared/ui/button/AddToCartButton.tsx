import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {ButtonProps} from '@mui/material';
import {ReactElement} from 'react';
import {Button} from './Button';

type Props = ButtonProps;

export const AddToCartButton = (props: Props): ReactElement => {
  return (
    <Button
      variant="contained"
      LeftAddon={AddShoppingCartIcon}
      sx={{width: '100%', maxWidth: 170, gap: 1}}
      {...props}
    >
      Add to wishlist
    </Button>
  );
};
