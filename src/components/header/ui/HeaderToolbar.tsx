import {Box, Stack, Toolbar} from '@mui/material';
import {ReactElement} from 'react';
import {getRouteMain} from '@/app/providers/AppRouter/routeConfig';
import {AppLink, AuthMenuButton, CartButton, Input, ThemeButton} from '@/shared/ui';

export const HeaderToolbar = (): ReactElement => {
  return (
    <Box width="100%">
      <Toolbar>
        <Stack width="100%" flexDirection="row" justifyContent="space-between" alignItems="center">
          <AppLink to={getRouteMain()} color="primary">
            Logo
          </AppLink>
          <Input placeholder="Search…" />
          <Stack flexDirection="row" justifyContent="space-between">
            <AuthMenuButton />
            <CartButton />
            <ThemeButton />
          </Stack>
        </Stack>
      </Toolbar>
    </Box>
  );
};
