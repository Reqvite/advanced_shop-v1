import {Box, Stack, Toolbar, Typography} from '@mui/material';
import {ReactElement} from 'react';
import {AuthMenuButton, CartButton, Input, ThemeButton} from '@/shared/ui';

export const HeaderToolbar = (): ReactElement => {
  return (
    <Box width="100%">
      <Toolbar>
        <Stack width="100%" flexDirection="row" justifyContent="space-between" alignItems="center">
          <Typography color="primary">Logo</Typography>
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
