import {Box, Rating, Typography} from '@mui/material';
import {ReactElement} from 'react';
import {LabelOptionsI} from '@/shared/types/options';
import {TruncatedTypography} from '../../typography/TruncatedTypography';
import {CardVariants} from '../ProductCard/ProductCard';

type Props = {
  title: string;
  description?: LabelOptionsI[];
  rating?: number;
  descriptionNoWrap?: boolean;
  descriptionMaxWidth?: number;
  titleMaxWidth?: number;
  withRating?: boolean;
  variant?: CardVariants;
  headingRows?: number;
};

export const ProductHeading = ({
  variant = 'small',
  title,
  description,
  rating,
  descriptionNoWrap,
  descriptionMaxWidth,
  headingRows = 2,
  titleMaxWidth,
  withRating = true
}: Props): ReactElement => {
  return (
    <Box>
      {variant === 'small' ? (
        <TruncatedTypography
          gutterBottom
          variant={'h5'}
          maxWidth={titleMaxWidth}
          lineclamp={headingRows}
        >
          {title}
        </TruncatedTypography>
      ) : (
        <Typography variant="h2">{title}</Typography>
      )}
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
