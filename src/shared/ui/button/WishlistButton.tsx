import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {IconButton} from '@mui/material';
import {ButtonProps} from '@mui/material';
import {ReactElement} from 'react';
import {useNavigate} from 'react-router-dom';
import {getRouteWishlist} from '@/app/providers/AppRouter/routeConfig';
import {grey, red} from '@/app/theme/theme';
import {useAuth} from '@/shared/lib/hooks';
import {Button} from './Button/Button';

type Props = ButtonProps & {
  withNavigate?: boolean;
  isSmall?: boolean;
  isLoading?: boolean;
  isLiked?: boolean;
  isClear?: boolean;
};

export const WishlistButton = ({
  withNavigate,
  isLiked,
  isSmall,
  isLoading,
  isClear,
  ...otherProps
}: Props): ReactElement | null => {
  const auth = useAuth();
  const buttonText = isLiked ? 'Remove' : 'Add to Wishlist';
  const navigate = useNavigate();

  if (withNavigate) {
    const onNavigate = (): void => {
      navigate(getRouteWishlist());
    };

    return auth.user ? (
      <IconButton onClick={onNavigate} {...otherProps}>
        <FavoriteBorderIcon />
      </IconButton>
    ) : null;
  }

  if (isSmall) {
    return (
      <IconButton {...otherProps}>
        {isLiked ? <FavoriteIcon sx={{color: red[300]}} /> : <FavoriteBorderIcon />}
      </IconButton>
    );
  }

  if (isClear) {
    return (
      <Button
        variant="text"
        iconColor={red[300]}
        iconSize="small"
        LeftAddon={isLiked ? FavoriteIcon : FavoriteBorderIcon}
        isLoading={isLoading}
        sx={{color: grey[200]}}
        {...otherProps}
      >
        Wishlist
      </Button>
    );
  }

  return (
    <Button
      color="secondary"
      iconColor={isLiked ? red[300] : 'inherit'}
      LeftAddon={isLiked ? FavoriteIcon : FavoriteBorderIcon}
      isLoading={isLoading}
      sx={{minWidth: 166}}
      {...otherProps}
    >
      {buttonText}
    </Button>
  );
};
