import {styled, Typography, TypographyProps} from '@mui/material';
interface TruncatedTypographyProps extends TypographyProps {
  lineclamp?: number;
}

export const TruncatedTypography = styled((props: TruncatedTypographyProps) => (
  <Typography {...props} />
))(({lineclamp = 2}) => ({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: lineclamp,
  WebkitBoxOrient: 'vertical'
}));
