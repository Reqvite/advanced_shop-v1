import {Button as MuiButton, ButtonProps, CircularProgress} from '@mui/material';
import {ElementType, ReactElement, ReactNode} from 'react';

type Props = ButtonProps & {
  children?: ReactNode;
  isLoading?: boolean;
  RightAddon?: ElementType;
  to?: string;
};

export const Button = ({
  variant = 'outlined',
  children,
  isLoading,
  RightAddon,
  ...otherProps
}: Props): ReactElement => {
  return (
    <MuiButton variant={variant} disabled={isLoading} {...otherProps}>
      {isLoading ? <CircularProgress size={24} color="inherit" /> : <span>{children}</span>}
      {!isLoading && RightAddon && <RightAddon fontSize="inherit" />}
    </MuiButton>
  );
};
