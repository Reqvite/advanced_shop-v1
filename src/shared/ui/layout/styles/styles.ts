import {Theme} from '@mui/material';

export const stickyContentLayoutStyles = {
  gridContainerStyles: (theme: Theme) => ({
    display: 'grid',
    gridTemplateAreas: `"left content"`,
    gridTemplateColumns: 'min-content 1fr',
    [theme.breakpoints.down('sm')]: {
      gridTemplateAreas: `"content" "left"`,
      gridTemplateColumns: '1fr'
    }
  }),
  leftGridItemStyles: {
    gridArea: 'left',
    position: 'sticky',
    top: 32,
    height: 'fit-content'
  },
  contentGridItemStyles: {
    gridArea: 'content',
    maxWidth: 1200,
    justifySelf: 'right',
    padding: 2,
    width: '100%'
  }
};
