import {AppBar, Container, Stack} from '@mui/material';
import {ReactElement} from 'react';
import {useMediaQuery} from '@/shared/lib/hooks';
import {headerStyles} from '../styles/styles';
import {HeaderCategories} from './HeaderCategories';
import {HeaderNavigation} from './HeaderNavigation';
import {HeaderToolbar} from './HeaderToolbar';

export const Header = (): ReactElement => {
  const isMobile = useMediaQuery('md');

  return (
    <AppBar position="static" sx={headerStyles.appBar}>
      <Stack sx={headerStyles.headerContainer}>
        <HeaderNavigation />
        <Container maxWidth="xl">
          <HeaderToolbar />
          {!isMobile && <HeaderCategories />}
        </Container>
      </Stack>
    </AppBar>
  );
};
