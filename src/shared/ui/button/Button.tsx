import {Button as MuiButton, ButtonProps, IconProps} from '@mui/material';
import {ElementType, ReactElement, ReactNode} from 'react';
import {Loader} from '../loader/Loader';

type Props = ButtonProps & {
  children?: ReactNode;
  isLoading?: boolean;
  RightAddon?: ElementType;
  LeftAddon?: ElementType;
  iconSize?: IconProps['fontSize'];
  iconColor?: string;
  to?: string;
};

export const Button = ({
  variant = 'outlined',
  children,
  isLoading,
  RightAddon,
  LeftAddon,
  iconColor = 'inherit',
  iconSize = 'medium',
  ...otherProps
}: Props): ReactElement => {
  return (
    <MuiButton variant={variant} disabled={isLoading} {...otherProps}>
      {!isLoading && LeftAddon && <LeftAddon sx={{color: iconColor}} fontSize={iconSize} />}
      {isLoading ? <Loader /> : children}
      {!isLoading && RightAddon && <RightAddon sx={{color: iconColor}} fontSize={iconSize} />}
    </MuiButton>
  );
};
