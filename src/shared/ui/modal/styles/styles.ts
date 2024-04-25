import {Theme} from '@mui/material';

export const modalStyles = {
  modal: (theme: Theme) => ({
    background: theme.palette.background.paper,
    boxShadow: theme.shadows[19],
    padding: theme.spacing(5)
  }),
  logo: {position: 'absolute', left: 10, top: 8},
  closeButton: {
    position: 'absolute',
    right: 10,
    top: 8
  }
};
