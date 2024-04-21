import {Container as MuiContainer, ContainerProps} from '@mui/material';
import {ReactElement, ReactNode} from 'react';

type Props = ContainerProps & {
  children: ReactNode;
};

export const Container = ({children, ...otherProps}: Props): ReactElement => {
  return (
    <MuiContainer maxWidth="xl" {...otherProps}>
      {children}
    </MuiContainer>
  );
};
