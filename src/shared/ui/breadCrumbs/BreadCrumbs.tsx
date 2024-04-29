import {Breadcrumbs as MuiBreadCrumbs, BreadcrumbsProps} from '@mui/material';
import Typography from '@mui/material/Typography';
import {ReactElement} from 'react';
import {AppLink} from '../link/AppLink';

type Props = BreadcrumbsProps;

export const Breadcrumbs = (props: Props): ReactElement => {
  return (
    <MuiBreadCrumbs aria-label="breadcrumb" {...props}>
      <AppLink underline="hover" color="inherit" to="/">
        MUI
      </AppLink>
      <AppLink underline="hover" color="inherit" to="/material-ui/getting-started/installation/">
        Core
      </AppLink>
      <Typography color="text.primary">Breadcrumbs</Typography>
    </MuiBreadCrumbs>
  );
};
