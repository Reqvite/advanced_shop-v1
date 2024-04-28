import {AppBar, Stack} from '@mui/material';
import {ReactElement} from 'react';
import {headerStyles} from '@/app/theme/styles';
import {HeaderNavigation} from './HeaderNavigation';
import {HeaderToolbar} from './HeaderToolbar';

export const Header = (): ReactElement => {
  return (
    <AppBar position="static">
      <Stack sx={headerStyles.headerContainer}>
        <HeaderNavigation />
        <HeaderToolbar />
      </Stack>
    </AppBar>
  );
};
