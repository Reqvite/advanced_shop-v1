import {Box, Rating, Typography} from '@mui/material';
import {ReactElement} from 'react';
import {LabelOptionsI} from '@/shared/types/options';

type Props = {
  title: string;
  description?: LabelOptionsI[];
  rating?: number;
  descriptionNoWrap?: boolean;
  descriptionMaxWidth?: number;
};

export const ProductHeading = ({
  title,
  description,
  rating,
  descriptionNoWrap,
  descriptionMaxWidth = 220
}: Props): ReactElement => {
  return (
    <Box>
      <Typography gutterBottom variant="h5">
        {title}
      </Typography>
      {description && (
        <Typography
          variant="body2"
          color="text.secondary"
          maxWidth={descriptionMaxWidth}
          noWrap={descriptionNoWrap}
        >
          {description[0].value}
        </Typography>
      )}
      {rating && <Rating value={rating} readOnly />}
    </Box>
  );
};
