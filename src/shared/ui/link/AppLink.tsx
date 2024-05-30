import {Link as MuiLink, LinkProps as MuiLinkProps, SxProps} from '@mui/material';
import {ReactElement, ReactNode} from 'react';
import {Link as RouterLink, LinkProps} from 'react-router-dom';

type Props = LinkProps &
  MuiLinkProps & {
    children?: ReactNode;
    label?: string;
    withUnderline?: boolean;
    sx?: SxProps;
  };

export const AppLink = ({
  children,
  withUnderline = true,
  label,
  sx,
  ...otherProps
}: Props): ReactElement => {
  return (
    <MuiLink
      component={RouterLink}
      sx={{
        '&:hover::before': {
          width: withUnderline ? '100%' : '0',
          opacity: 1
        },
        ...sx
      }}
      {...otherProps}
    >
      {label}
      {children}
    </MuiLink>
  );
};
