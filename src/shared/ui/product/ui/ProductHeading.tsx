import {Box, Rating, Typography} from '@mui/material';
import {ReactElement} from 'react';
import {LabelOptionsI} from '@/shared/types/options';
import {TruncatedTypography} from '../../typography/TruncatedTypography';

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
  descriptionMaxWidth
}: Props): ReactElement => {
  return (
    <Box>
      <Typography gutterBottom variant="h5">
        {title}
      </Typography>
      {description && (
        <TruncatedTypography
          variant="body2"
          color="text.primary"
          maxWidth={descriptionMaxWidth}
          noWrap={descriptionNoWrap}
        >
          {description[0].value}
        </TruncatedTypography>
      )}
      {rating && <Rating value={rating} readOnly />}
    </Box>
  );
};
