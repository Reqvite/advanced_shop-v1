import {Grid} from '@mui/material';
import {ReactNode} from 'react';

interface Props {
  left?: ReactNode;
  content: ReactNode;
  bottom?: ReactNode;
}

export const StickyContentLayout = ({content, left, bottom}: Props) => {
  return (
    <>
      <Grid
        container
        sx={(theme) => ({
          display: 'grid',
          gridTemplateAreas: `"left content"`,
          gridTemplateColumns: 'min-content 1fr',
          [theme.breakpoints.down('sm')]: {
            gridTemplateAreas: `"content" "left"`,
            gridTemplateColumns: '1fr'
          }
        })}
      >
        {left && (
          <Grid
            item
            sx={{
              gridArea: 'left',
              position: 'sticky',
              top: 32,
              height: 'fit-content'
            }}
          >
            {left}
          </Grid>
        )}
        <Grid
          item
          sx={{
            gridArea: 'content',
            maxWidth: 1200,
            justifySelf: 'right',
            padding: 2,
            width: '100%'
          }}
        >
          {content}
        </Grid>
      </Grid>
      {bottom}
    </>
  );
};
