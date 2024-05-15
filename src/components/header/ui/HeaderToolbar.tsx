import {Box, Stack} from '@mui/material';
import {ReactElement} from 'react';
import {AuthMenuButton, CartButton, Logo, WishlistButton} from '@/shared/ui';

export const HeaderToolbar = (): ReactElement => {
  return (
    <Box width="100%" p={0}>
      <Box sx={{padding: 0}}>
        <Stack width="100%" flexDirection="row" justifyContent="space-between" alignItems="center">
          <Logo />
          {/* <Input placeholder="Search…" /> */}
          <Stack flexDirection="row" justifyContent="space-between">
            <WishlistButton isNavigate />
            <AuthMenuButton />
            <CartButton />
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};
