import {Button as MuiButton, ButtonProps, CircularProgress} from '@mui/material';
import {ReactElement, ReactNode} from 'react';

type Props = ButtonProps & {
  children?: ReactNode;
  isLoading?: boolean;
};

export const Button = ({
  variant = 'outlined',
  children,
  isLoading,
  ...otherProps
}: Props): ReactElement => {
  return (
    <MuiButton variant={variant} disabled={isLoading} {...otherProps}>
      {isLoading ? <CircularProgress size={24} color="inherit" /> : <span>{children}</span>}
    </MuiButton>
  );
};
