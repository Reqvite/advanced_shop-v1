import {Box, Stack} from '@mui/material';
import {ReactElement} from 'react';
import {useMediaQuery} from '@/shared/lib/hooks';
import {AuthMenuButton, CartButton, Logo, WishlistButton} from '@/shared/ui';
import {SearchInput} from './SearchInput';

export const HeaderToolbar = (): ReactElement => {
  const isMobile = useMediaQuery('md');

  return (
    <Box width="100%" p={0}>
      <Box sx={{padding: 0}}>
        <Stack width="100%" flexDirection="row" justifyContent="space-between" alignItems="center">
          <Logo />
          {!isMobile && <SearchInput />}
          <Stack flexDirection="row" justifyContent="space-between">
            <WishlistButton withNavigate />
            <AuthMenuButton />
            <CartButton />
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};
