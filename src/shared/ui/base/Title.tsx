import {Typography, TypographyProps} from '@mui/material';
import {ReactElement} from 'react';
import {grey} from '@/app/theme/theme';
type Props = {
  titleVariant?: TypographyProps['variant'];
  title?: string;
  description?: string;
  descriptionColor?: string;
};

export const Title = ({
  titleVariant = 'h3',
  title,
  description,
  descriptionColor = grey[200]
}: Props): ReactElement => {
  return (
    <>
      <Typography variant={titleVariant}>{title}</Typography>
      {description && (
        <Typography fontSize="12px" mt={1} color={descriptionColor}>
          {description}
        </Typography>
      )}
    </>
  );
};
