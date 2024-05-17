import {AppBar, Container, Stack} from '@mui/material';
import {ReactElement} from 'react';
import {headerStyles} from '@/app/theme/styles';
import {useMediaQuery} from '@/shared/lib/hooks';
import {HeaderCategories} from './HeaderCategories';
import {HeaderNavigation} from './HeaderNavigation';
import {HeaderToolbar} from './HeaderToolbar';

export const Header = (): ReactElement => {
  const isMobile = useMediaQuery('md');

  return (
    <AppBar position="static" sx={headerStyles.appBar}>
      <Stack sx={headerStyles.headerContainer}>
        <HeaderNavigation />
        <Container maxWidth="xl" sx={{padding: 0}}>
          <HeaderToolbar />
          {!isMobile && <HeaderCategories />}
        </Container>
      </Stack>
    </AppBar>
  );
};
