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
  navContainer: (theme: Theme) => ({
    [theme.breakpoints.down('md')]: {
      alignItems: 'flex-start',
      flexDirection: 'column'
    },
    p: 2,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  }),
  navStack: (theme: Theme) => ({
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column'
    },
    flexDirection: 'row',
    gap: 2
  }),
  navDrawerContainer: {gap: 2, p: 2}
};

export const containerStyles = {
  container: {flex: '1 0 auto', paddingY: 3}
};

const baseImageStyle = {
  cursor: 'pointer',
  borderRadius: 1,
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.02)'
  }
};

export const imageGalleryStyles = {
  smallImg: {
    maxWidth: 60,
    height: 60,
    ...baseImageStyle
  },
  bigImg: {
    height: 218,
    width: '100%',
    ...baseImageStyle
  }
};

export const stickyContentLayoutStyles = {
  gridContainer: (theme: Theme) => ({
    display: 'grid',
    gridTemplateAreas: `"left content"`,
    gridTemplateColumns: 'min-content 1fr',
    [theme.breakpoints.down('sm')]: {
      gridTemplateAreas: `"content" "left"`,
      gridTemplateColumns: '1fr'
    }
  }),
  leftGridItem: {
    gridArea: 'left',
    position: 'sticky',
    top: 32,
    height: 'fit-content'
  },
  contentGridItem: {
    gridArea: 'content',
    maxWidth: 1200,
    justifySelf: 'right',
    padding: 2,
    width: '100%'
  }
};

export const productCardStyles = {
  smallCardContainer: {width: '100%', maxWidth: 500},
  smallCardActionsContainer: {display: 'flex', justifyContent: 'space-between', gap: 2},
  bigCardContainer: {maxWidth: 869, minHeight: 280, maxHeight: 280, width: '100%'},
  bigCardMedia: {minHeight: '100%', maxWidth: 268, objectFit: 'cover'},
  bigCardContent: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 1
  },
  bigCardActionsContainer: {display: 'flex', flexDirection: 'column', gap: 2},
  box: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'space-between'
  }
};
