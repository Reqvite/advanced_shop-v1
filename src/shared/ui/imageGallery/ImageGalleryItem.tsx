import {CardMedia, CardMediaProps, Grid} from '@mui/material';

type Props = CardMediaProps & {
  alt?: string;
};

export const ImageGalleryItem = ({alt, ...otherProps}: Props) => {
  return (
    <Grid item xs={6} maxWidth={200}>
      <CardMedia component="img" alt={alt} {...otherProps} />
    </Grid>
  );
};
