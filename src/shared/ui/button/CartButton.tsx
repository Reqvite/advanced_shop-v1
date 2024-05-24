import LocalMallIcon from '@mui/icons-material/LocalMall';
import {Badge, IconButton, IconButtonProps} from '@mui/material';
import {ReactElement} from 'react';
import {useNavigate} from 'react-router-dom';
import {getRouteShoppingCart} from '@/app/providers/AppRouter/routeConfig';
import {cartButtonStyles} from '@/app/theme/styles';
import {useAuth} from '@/shared/lib/hooks';

type Props = IconButtonProps;

export const CartButton = (props: Props): ReactElement => {
  const navigate = useNavigate();
  const {user} = useAuth();
  const quantity = user?.cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Badge
      badgeContent={quantity}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left'
      }}
      sx={cartButtonStyles.quantityBade}
    >
      <IconButton aria-label="Cart" onClick={() => navigate(getRouteShoppingCart())} {...props}>
        <LocalMallIcon fontSize="inherit" />
      </IconButton>
    </Badge>
  );
};
