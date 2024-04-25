import {CardMedia, CardMediaProps, Grid} from '@mui/material';

type Props = CardMediaProps & {
  alt?: string;
};

export const ImageGalleryItem = ({alt, ...otherProps}: Props) => {
  return (
    <Grid item xs={6}>
      <CardMedia component="img" alt={alt} {...otherProps} />
    </Grid>
  );
};
