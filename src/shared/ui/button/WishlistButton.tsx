import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {ButtonProps} from '@mui/material';
import {Button} from './Button';

type Props = ButtonProps;

export const WishlistButton = (props: Props) => {
  return (
    <Button
      variant="outlined"
      LeftAddon={FavoriteBorderIcon}
      sx={{width: '100%', maxWidth: 170, gap: 1}}
      {...props}
    >
      Add to wishlist
    </Button>
  );
};
