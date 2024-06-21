import {Button as MuiButton, ButtonProps, IconProps} from '@mui/material';
import {ElementType, ReactElement, ReactNode} from 'react';
import {Loader} from '../../loader/Loader';

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
  disabled,
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
    <MuiButton
      data-testid="button"
      variant={variant}
      disabled={isLoading || disabled}
      {...otherProps}
    >
      {!isLoading && LeftAddon && (
        <LeftAddon data-testid="LeftAddon" sx={{color: iconColor}} fontSize={iconSize} />
      )}
      {isLoading ? <Loader /> : children}
      {!isLoading && RightAddon && (
        <RightAddon data-testid="RightAddon" sx={{color: iconColor}} fontSize={iconSize} />
      )}
    </MuiButton>
  );
};
