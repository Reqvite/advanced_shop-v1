import {Theme} from '@mui/material';

export const headerStyles = {
  headerContainer: (theme: Theme) => ({
    [theme.breakpoints.down('md')]: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    flexDirection: 'column',
    alignItems: 'none'
  }),
  navContainerStyles: (theme: Theme) => ({
    [theme.breakpoints.down('md')]: {
      alignItems: 'flex-start',
      flexDirection: 'column'
    },
    p: 2,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  }),
  navStackStyles: (theme: Theme) => ({
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column'
    },
    flexDirection: 'row',
    gap: 2
  }),
  navDrawerContainer: {gap: 2, p: 2}
};
