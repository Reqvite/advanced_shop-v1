import {Button as MuiButton, ButtonProps} from '@mui/material';
import {ElementType, ReactElement, ReactNode} from 'react';
import {Loader} from '../loader/Loader';

type Props = ButtonProps & {
  children?: ReactNode;
  isLoading?: boolean;
  RightAddon?: ElementType;
  LeftAddon?: ElementType;
  iconSize?: 'inherit' | 'small' | 'large' | 'medium';
  to?: string;
};

export const Button = ({
  variant = 'outlined',
  children,
  isLoading,
  RightAddon,
  LeftAddon,
  iconSize = 'medium',
  ...otherProps
}: Props): ReactElement => {
  return (
    <MuiButton variant={variant} disabled={isLoading} {...otherProps}>
      {!isLoading && LeftAddon && <LeftAddon fontSize={iconSize} />}
      {isLoading ? <Loader /> : <span>{children}</span>}
      {!isLoading && RightAddon && <RightAddon fontSize={iconSize} />}
    </MuiButton>
  );
};
