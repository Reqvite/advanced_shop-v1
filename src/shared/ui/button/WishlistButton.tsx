import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {IconButton} from '@mui/material';
import {ButtonProps} from '@mui/material';
import {ReactElement} from 'react';
import {useNavigate} from 'react-router-dom';
import {getRouteWishlist} from '@/app/providers/AppRouter/routeConfig';
import {red} from '@/app/theme/theme';
import {useAppDispatch, useAuth} from '@/shared/lib/hooks';
import {actions} from '@/slices/filter';
import {Button} from './Button';

type Props = ButtonProps & {
  isNavigate?: boolean;
  isSmall?: boolean;
  isLoading?: boolean;
  isLiked?: boolean;
};

export const WishlistButton = ({
  isNavigate,
  isLiked,
  isSmall,
  isLoading,
  ...otherProps
}: Props): ReactElement | null => {
  const auth = useAuth();
  const buttonText = isLiked ? 'Remove' : 'Add to Wishlist';
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  if (isNavigate) {
    const onNavigate = (): void => {
      dispatch(actions.resetFilter());
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
