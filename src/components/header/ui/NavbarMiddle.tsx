import {Box, Stack, Toolbar, Typography} from '@mui/material';
import {AuthButton, CartButton, Input, ThemeButton} from '@/shared/ui';

export const NavbarMiddle = () => {
  return (
    <Box width="100%">
      <Toolbar>
        <Stack width="100%" flexDirection="row" justifyContent="space-between" alignItems="center">
          <Typography color="primary">Logo</Typography>
          <Input placeholder="Search…" />
          <Stack flexDirection="row">
            <AuthButton />
            <CartButton />
            <ThemeButton />
          </Stack>
        </Stack>
      </Toolbar>
    </Box>
  );
};
