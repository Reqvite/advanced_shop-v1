import {Grid} from '@mui/material';
import {ReactElement, ReactNode} from 'react';
import {stickyContentLayoutStyles} from '@/app/theme/styles';

interface Props {
  left?: ReactNode;
  content: ReactNode;
  bottom?: ReactNode;
}

export const StickyContentLayout = ({content, left, bottom}: Props): ReactElement => {
  return (
    <>
      <Grid container sx={stickyContentLayoutStyles.gridContainer}>
        {left && (
          <Grid item sx={stickyContentLayoutStyles.leftGridItem}>
            {left}
          </Grid>
        )}
        <Grid item sx={stickyContentLayoutStyles.contentGridItem}>
          {content}
        </Grid>
      </Grid>
      {bottom}
    </>
  );
};
