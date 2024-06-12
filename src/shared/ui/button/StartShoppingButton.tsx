import {ButtonProps} from '@mui/material';
import {ReactElement} from 'react';
import {useNavigate} from 'react-router-dom';
import {getRouteMain} from '@/app/providers/AppRouter/routeConfig';
import {Button} from './Button';

type Props = ButtonProps & {
  title?: string;
};

export const StartShoppingButton = ({
  title = 'Back to Shopping 🛍️',
  ...otherProps
}: Props): ReactElement => {
  const navigate = useNavigate();
  const onButtonClick = (): void => {
    navigate(getRouteMain());
  };

  return (
    <Button onClick={onButtonClick} {...otherProps}>
      {title}
    </Button>
  );
};
