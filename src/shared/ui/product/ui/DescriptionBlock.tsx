import {Stack, Typography} from '@mui/material';
import {ReactElement} from 'react';
import {LabelOptionsI} from '@/shared/types/options';

export const DescriptionBlock = ({label, value}: LabelOptionsI): ReactElement => {
  return (
    <Stack gap={1}>
      <Typography fontWeight={600} component="h3">
        {label}
      </Typography>
      <Typography>{value}</Typography>
    </Stack>
  );
};
