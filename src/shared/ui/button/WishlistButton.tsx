import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {ButtonProps} from '@mui/material';
import {ReactElement} from 'react';
import {Button} from './Button';

type Props = ButtonProps;

export const WishlistButton = (props: Props): ReactElement => {
  return (
    <Button variant="outlined" LeftAddon={FavoriteBorderIcon} sx={{maxWidth: 200}} {...props}>
      Add to wishlist
    </Button>
  );
};
