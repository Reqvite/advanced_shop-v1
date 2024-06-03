import {Box, SxProps} from '@mui/material';
import {ReactElement} from 'react';
import {getRouteMain} from '@/app/providers/AppRouter/routeConfig';
import logo from '@/shared/assets/svg/logo.svg';
import {useMediaQuery} from '@/shared/lib/hooks';
import {AppLink} from '../link/AppLink';

type Props = {
  sx?: SxProps;
};

export const Logo = ({sx}: Props): ReactElement => {
  const isMobile = useMediaQuery('md');

  return (
    <AppLink to={getRouteMain()} color="primary" sx={sx} withUnderline={false}>
      <Box component="img" width={isMobile ? '150px' : '200px'} src={logo} alt="logo" />
    </AppLink>
  );
};
