import {Container as MuiContainer, ContainerProps} from '@mui/material';
import {ReactElement, ReactNode} from 'react';
import {containerStyles} from '@/app/theme/styles';

type Props = ContainerProps & {
  children: ReactNode;
};

export const Container = ({children, ...otherProps}: Props): ReactElement => {
  return (
    <MuiContainer maxWidth="xl" sx={containerStyles.container} {...otherProps}>
      {children}
    </MuiContainer>
  );
};
