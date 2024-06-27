import LocalMallIcon from '@mui/icons-material/LocalMall';
import {Badge, IconButton, IconButtonProps} from '@mui/material';
import {ReactElement} from 'react';
import {useNavigate} from 'react-router-dom';
import {getRouteShoppingCart} from '@/app/providers/AppRouter/routeConfig';
import {cartButtonStyles} from '@/app/theme/styles';
import {AuthForm} from '@/components/modalContent';
import {useAppDispatch, useAuth} from '@/shared/lib/hooks';
import {actions as modalActions} from '@/slices/modal';
import {testIdValues} from '@/test/const/testId';

type Props = IconButtonProps;

export const CartButton = (props: Props): ReactElement => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {user} = useAuth();
  const quantity = user?.cart?.reduce((acc, item) => acc + item.quantity, 0);

  const onClickButton = (): void => {
    if (user) {
      navigate(getRouteShoppingCart());
    } else {
      dispatch(modalActions.openModal({children: <AuthForm />}));
    }
  };

  return (
    <Badge
      badgeContent={quantity}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left'
      }}
      sx={cartButtonStyles.quantityBade}
    >
      <IconButton
        data-testid={testIdValues.cartButtonTestId}
        aria-label="Cart"
        onClick={onClickButton}
        {...props}
      >
        <LocalMallIcon fontSize="inherit" />
      </IconButton>
    </Badge>
  );
};
