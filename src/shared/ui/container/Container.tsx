import {Container as MuiContainer, ContainerProps} from '@mui/material';
import {ReactElement, ReactNode} from 'react';

const container = {flex: '1 0 auto', paddingY: 3};

type Props = ContainerProps & {
  children: ReactNode;
};

export const Container = ({children, ...otherProps}: Props): ReactElement => {
  return (
    <MuiContainer maxWidth="xl" sx={container} {...otherProps}>
      {children}
    </MuiContainer>
  );
};
