import {Theme} from '@mui/material';

export const footerStyles = {
  flex: (theme: Theme) => ({
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center'
    },
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  }),
  flexItem: {
    minWidth: '200px',
    justifyContent: 'center'
  }
};
