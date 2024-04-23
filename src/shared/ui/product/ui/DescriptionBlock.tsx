import {Stack, Typography} from '@mui/material';
import {LabelOptionsI} from '@/shared/types/options';

export const DescriptionBlock = ({label, value}: LabelOptionsI) => {
  return (
    <Stack>
      <Typography>{label}</Typography>
      <Typography>{value}</Typography>
    </Stack>
  );
};
