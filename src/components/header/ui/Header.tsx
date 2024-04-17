import {AppBar} from '@mui/material';
import {ReactElement} from 'react';
import {AuthButton} from '@/shared/ui';

export const Header = (): ReactElement => {
  return (
    <AppBar position="static">
      <AuthButton />
    </AppBar>
  );
};
