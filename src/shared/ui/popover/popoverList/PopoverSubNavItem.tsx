import {Typography} from '@mui/material';
import {ReactElement} from 'react';
import {AppLink} from '../../link/AppLink';

type Props = {
  _id: string;
  label?: string;
  href?: string;
  onClick?: () => void;
};

export const SubNavItem = ({label, onClick, href}: Props): ReactElement => {
  if (href) {
    return (
      <AppLink sx={{color: 'text.primary'}} to={href}>
        {label}
      </AppLink>
    );
  }

  return (
    <Typography onClick={onClick && onClick} variant="body1" component="div">
      {label}
    </Typography>
  );
};
