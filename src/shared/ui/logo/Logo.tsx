import {SxProps} from '@mui/material';
import {ReactElement} from 'react';
import {getRouteMain} from '@/app/providers/AppRouter/routeConfig';
import logo from '@/shared/assets/svg/logo.svg';
import {AppLink} from '../link/AppLink';

type Props = {
  sx?: SxProps;
};

export const Logo = ({sx}: Props): ReactElement => {
  return (
    <AppLink to={getRouteMain()} color="primary" sx={sx}>
      <img src={logo} alt="logo" />
    </AppLink>
  );
};
