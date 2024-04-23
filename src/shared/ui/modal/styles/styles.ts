import {Box, styled} from '@mui/material';

export const ModalStyled = styled(Box)(({theme}) => ({
  background: theme.palette.background.paper,
  boxShadow: theme.shadows[19],
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(5)
}));
