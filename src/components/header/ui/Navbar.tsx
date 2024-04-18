import {Stack} from '@mui/material';
import {ReactElement} from 'react';
import {NavbarMiddle} from './NavbarMiddle';
import {Navigation} from './Navigation';

export const Navbar = (): ReactElement => {
  return (
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
      <Navigation />
      <NavbarMiddle />
    </Stack>
  );
};
