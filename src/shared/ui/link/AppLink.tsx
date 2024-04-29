import {Link as MuiLink, LinkProps as MuiLinkProps} from '@mui/material';
import {ReactElement, ReactNode} from 'react';
import {Link as RouterLink, LinkProps} from 'react-router-dom';

type Props = LinkProps &
  MuiLinkProps & {
    children?: ReactNode;
    label?: string;
  };

export const AppLink = ({children, label, ...otherProps}: Props): ReactElement => {
  return (
    <MuiLink component={RouterLink} {...otherProps}>
      {label}
      {children}
    </MuiLink>
  );
};
