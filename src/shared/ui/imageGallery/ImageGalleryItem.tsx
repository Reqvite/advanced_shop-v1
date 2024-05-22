import {alpha, Box, CardMedia, CardMediaProps} from '@mui/material';
import {ReactElement} from 'react';
import {brand} from '@/app/theme/theme';

type Props = CardMediaProps & {
  alt?: string;
  isActive?: boolean;
};

export const ImageGalleryItem = ({alt, isActive = false, ...otherProps}: Props): ReactElement => {
  return (
    <Box
      maxWidth={200}
      sx={{...(isActive && {border: `2px solid ${alpha(brand[500], 0.4)}`, borderRadius: '12px'})}}
    >
      <CardMedia component="img" alt={alt} {...otherProps} />
    </Box>
  );
};
