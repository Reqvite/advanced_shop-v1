import {AppBar, Stack} from '@mui/material';
import {ReactElement} from 'react';
import {HeaderNavigation} from './HeaderNavigation';
import {HeaderToolbar} from './HeaderToolbar';

export const Header = (): ReactElement => {
  return (
    <AppBar position="static">
      <Stack
        sx={(theme) => ({
          [theme.breakpoints.down('md')]: {
            flexDirection: 'row',
            alignItems: 'center'
          },
          flexDirection: 'column',
          alignItems: 'none'
        })}
      >
        <HeaderNavigation />
        <HeaderToolbar />
      </Stack>
    </AppBar>
  );
};
