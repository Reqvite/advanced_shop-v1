import {Stack} from '@mui/material';
import {NavbarMiddle} from './NavbarMiddle';
import {Navigation} from './Navigation';

export const Navbar = () => {
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
