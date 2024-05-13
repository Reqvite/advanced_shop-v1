import {Link as MuiLink, LinkProps as MuiLinkProps} from '@mui/material';
import {ReactElement, ReactNode} from 'react';
import {Link as RouterLink, LinkProps} from 'react-router-dom';

type Props = LinkProps &
  MuiLinkProps & {
    children?: ReactNode;
    label?: string;
    withUnderline?: boolean;
  };

export const AppLink = ({
  children,
  withUnderline = true,
  label,
  ...otherProps
}: Props): ReactElement => {
  return (
    <MuiLink
      component={RouterLink}
      sx={{
        '&:hover::before': {
          width: withUnderline ? '100%' : '0',
          opacity: 1
        }
      }}
      {...otherProps}
    >
      {label}
      {children}
    </MuiLink>
  );
};
