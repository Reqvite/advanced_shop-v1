import LocalMallIcon from '@mui/icons-material/LocalMall';
import {IconButton, IconButtonProps} from '@mui/material';
import {ReactElement} from 'react';
import {useNavigate} from 'react-router-dom';
import {getRouteCheckout} from '@/app/providers/AppRouter/routeConfig';

type Props = IconButtonProps;

export const CartButton = (props: Props): ReactElement => {
  const navigate = useNavigate();

  return (
    <IconButton aria-label="Cart" onClick={() => navigate(getRouteCheckout())} {...props}>
      <LocalMallIcon fontSize="inherit" />
    </IconButton>
  );
};
