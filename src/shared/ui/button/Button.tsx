import {LoadingButton, LoadingButtonProps} from '@mui/lab';
import {ReactElement, ReactNode} from 'react';

type Props = LoadingButtonProps & {
  children?: ReactNode;
};

export const Button = ({variant = 'outlined', children, ...otherProps}: Props): ReactElement => {
  return (
    <LoadingButton variant={variant} loadingPosition="center" {...otherProps}>
      <span>{children}</span>
    </LoadingButton>
  );
};
