import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {ButtonProps} from '@mui/material';
import {ReactElement} from 'react';
import {red} from '@/app/theme/theme';
import {Button} from './Button';

type Props = ButtonProps & {
  isLoading?: boolean;
  isLiked?: boolean;
};

export const WishlistButton = ({isLiked, ...otherProps}: Props): ReactElement => {
  const buttonText = isLiked ? 'Remove' : 'Add to Wishlist';
  return (
    <Button
      iconColor={isLiked ? red[300] : 'inherit'}
      LeftAddon={isLiked ? FavoriteIcon : FavoriteBorderIcon}
      sx={{maxWidth: 200}}
      {...otherProps}
    >
      {buttonText}
    </Button>
  );
};
