import {Grid} from '@mui/material';
import {ReactElement, ReactNode} from 'react';
import {stickyContentLayoutStyles} from './styles/styles';

interface Props {
  left?: ReactNode;
  content: ReactNode;
  bottom?: ReactNode;
}

export const StickyContentLayout = ({content, left, bottom}: Props): ReactElement => {
  return (
    <>
      <Grid container sx={stickyContentLayoutStyles.gridContainerStyles}>
        {left && (
          <Grid item sx={stickyContentLayoutStyles.leftGridItemStyles}>
            {left}
          </Grid>
        )}
        <Grid item sx={stickyContentLayoutStyles.contentGridItemStyles}>
          {content}
        </Grid>
      </Grid>
      {bottom}
    </>
  );
};
