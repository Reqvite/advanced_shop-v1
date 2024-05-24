import {Box} from '@mui/material';
import {ReactElement} from 'react';
import {Title} from '@/shared/ui';

export const BillingInfo = (): ReactElement => {
  return (
    <Box>
      <Title title="Billing info" description="Please enter your billing info." />
    </Box>
  );
};
