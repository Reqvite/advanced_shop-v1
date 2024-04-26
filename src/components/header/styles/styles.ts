import {Theme} from '@mui/material';

export const headerStyles = {
  appBar: {boxShadow: 'none'},
  headerContainer: (theme: Theme) => ({
    [theme.breakpoints.down('md')]: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    flexDirection: 'column',
    alignItems: 'none'
  }),
  navContainerStyles: (theme: Theme) => ({
    alignItems: 'flex-start',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      borderBottom: `1px solid ${theme.palette.grey[100]}`,
      alignItems: 'center',
      flexDirection: 'row'
    },
    p: 2,
    justifyContent: 'center'
  }),
  navStackStyles: (theme: Theme) => ({
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column'
    },
    flexDirection: 'row',
    gap: 2
  }),
  navDrawerContainer: {gap: 2, p: 2},
  categoriesContainer: (theme: Theme) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 55,
    backgroundColor: theme.palette.grey[900]
  }),
  navMaxWidth: {
    width: '100%',
    maxWidth: 1500
  }
};
