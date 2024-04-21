import {Container as MuiContainer, ContainerProps} from '@mui/material';
import {ReactElement, ReactNode} from 'react';

type Props = ContainerProps & {
  children: ReactNode;
};

export const Container = ({children, ...otherProps}: Props): ReactElement => {
  return (
    <MuiContainer sx={{paddingY: 3}} maxWidth="xl" {...otherProps}>
      {children}
    </MuiContainer>
  );
};
