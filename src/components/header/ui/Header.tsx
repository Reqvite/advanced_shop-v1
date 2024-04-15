import {AppBar} from '@mui/material';
import {ReactElement} from 'react';
import {ThemeButton} from '@/shared/ui';

export const Header = (): ReactElement => {
  return (
    <AppBar position="static">
      <ThemeButton />
    </AppBar>
  );
};
