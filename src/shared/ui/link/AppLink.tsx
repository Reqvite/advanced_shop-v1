import {Link as MuiLink} from '@mui/material';
import {ReactNode} from 'react';
import {Link as RouterLink, LinkProps} from 'react-router-dom';

type Props = LinkProps & {
  children?: ReactNode;
  label?: string;
};

export const AppLink = ({children, label, ...otherProps}: Props) => {
  return (
    <MuiLink component={RouterLink} {...otherProps}>
      {label}
      {children}
    </MuiLink>
  );
};
