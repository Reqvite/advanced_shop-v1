import {Container as MuiContainer} from '@mui/material';
import {ReactElement, ReactNode} from 'react';

interface Props {
  children: ReactNode;
}

export const Container = ({children}: Props): ReactElement => {
  return <MuiContainer maxWidth="xl">{children}</MuiContainer>;
};
