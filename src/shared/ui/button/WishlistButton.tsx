import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {IconButton} from '@mui/material';
import {ButtonProps} from '@mui/material';
import {ReactElement} from 'react';
import {red} from '@/app/theme/theme';
import {Button} from './Button';

type Props = ButtonProps & {
  isSmall?: boolean;
  isLoading?: boolean;
  isLiked?: boolean;
};

export const WishlistButton = ({
  isLiked,
  isSmall,
  isLoading,
  ...otherProps
}: Props): ReactElement => {
  const buttonText = isLiked ? 'Remove' : 'Add to Wishlist';

  if (isSmall) {
    return (
      <IconButton {...otherProps}>
        {isLiked ? <FavoriteIcon sx={{color: red[300]}} /> : <FavoriteBorderIcon />}
      </IconButton>
    );
  }

  return (
    <Button
      iconColor={isLiked ? red[300] : 'inherit'}
      LeftAddon={isLiked ? FavoriteIcon : FavoriteBorderIcon}
      isLoading={isLoading}
      sx={{maxWidth: 200}}
      {...otherProps}
    >
      {buttonText}
    </Button>
  );
};
