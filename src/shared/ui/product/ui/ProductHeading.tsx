import {Box, Rating} from '@mui/material';
import {ReactElement} from 'react';
import {LabelOptionsI} from '@/shared/types/options';
import {TruncatedTypography} from '../../typography/TruncatedTypography';
import {CardVariants} from '../ProductCard';

type Props = {
  title: string;
  description?: LabelOptionsI[];
  rating?: number;
  descriptionNoWrap?: boolean;
  descriptionMaxWidth?: number;
  titleMaxWidth?: number;
  withRating?: boolean;
  variant?: CardVariants;
};

export const ProductHeading = ({
  variant = 'small',
  title,
  description,
  rating,
  descriptionNoWrap,
  descriptionMaxWidth,
  titleMaxWidth,
  withRating = true
}: Props): ReactElement => {
  return (
    <Box>
      <TruncatedTypography
        gutterBottom
        variant={variant === 'small' ? 'h5' : 'h2'}
        maxWidth={titleMaxWidth}
      >
        {title}
      </TruncatedTypography>
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
      {withRating && <Rating value={rating} readOnly />}
    </Box>
  );
};
