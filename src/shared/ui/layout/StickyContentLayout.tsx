import {Grid, Theme} from '@mui/material';
import {ReactElement, ReactNode} from 'react';

interface Props {
  left?: ReactNode;
  content: ReactNode;
  bottom?: ReactNode;
}

const gridContainerStyles = (theme: Theme) => ({
  display: 'grid',
  gridTemplateAreas: `"left content"`,
  gridTemplateColumns: 'min-content 1fr',
  [theme.breakpoints.down('sm')]: {
    gridTemplateAreas: `"content" "left"`,
    gridTemplateColumns: '1fr'
  }
});
const leftGridItemStyles = {
  gridArea: 'left',
  position: 'sticky',
  top: 32,
  height: 'fit-content'
};
const contentGridItemStyles = {
  gridArea: 'content',
  maxWidth: 1200,
  justifySelf: 'right',
  padding: 2,
  width: '100%'
};

export const StickyContentLayout = ({content, left, bottom}: Props): ReactElement => {
  return (
    <>
      <Grid container sx={gridContainerStyles}>
        {left && (
          <Grid item sx={leftGridItemStyles}>
            {left}
          </Grid>
        )}
        <Grid item sx={contentGridItemStyles}>
          {content}
        </Grid>
      </Grid>
      {bottom}
    </>
  );
};
