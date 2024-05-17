import {Box, Stack, Toolbar} from '@mui/material';
import {ReactElement} from 'react';
import {AuthMenuButton, CartButton, Input, Logo, WishlistButton} from '@/shared/ui';

export const HeaderToolbar = (): ReactElement => {
  return (
    <Box width="100%">
      <Toolbar>
        <Stack width="100%" flexDirection="row" justifyContent="space-between" alignItems="center">
          <Logo />
          <Input placeholder="Search…" />
          <Stack flexDirection="row" justifyContent="space-between">
            <WishlistButton withNavigate />
            <AuthMenuButton />
            <CartButton />
          </Stack>
        </Stack>
      </Toolbar>
    </Box>
  );
};
