import {Box} from '@mui/material';
import {ReactElement} from 'react';
import {Title} from '@/shared/ui';

export const AdditionalInfo = (): ReactElement => {
  return (
    <Box mt="64px">
      <Title
        title="Additional information"
        description="Need something else? We will make it for you!"
      />
    </Box>
  );
};
