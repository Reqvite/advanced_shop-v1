import {Box, Rating, Typography} from '@mui/material';
import {ReactElement} from 'react';

type Props = {
  title: string;
  description?: string;
  rating?: number;
};

export const ProductHeading = ({title, description, rating}: Props): ReactElement => {
  return (
    <Box>
      <Typography gutterBottom variant="h5">
        {title}
      </Typography>
      {description && (
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      )}
      {rating && <Rating value={rating} readOnly />}
    </Box>
  );
};
