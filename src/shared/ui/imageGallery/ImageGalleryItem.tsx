import {CardMedia, CardMediaProps, Grid} from '@mui/material';
import {ReactElement} from 'react';

type Props = CardMediaProps & {
  alt?: string;
};

export const ImageGalleryItem = ({alt, ...otherProps}: Props): ReactElement => {
  return (
    <Grid item xs={6} maxWidth={200}>
      <CardMedia component="img" alt={alt} {...otherProps} />
    </Grid>
  );
};
