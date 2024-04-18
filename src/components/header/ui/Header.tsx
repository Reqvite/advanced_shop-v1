import {AppBar} from '@mui/material';
import {ReactElement} from 'react';
import {Navbar} from './Navbar';

export const Header = (): ReactElement => {
  return (
    <AppBar position="static">
      <Navbar />
    </AppBar>
  );
};
