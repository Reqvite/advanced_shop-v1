import {Box, Grid} from '@mui/material';
import {ReactElement} from 'react';
import {renderFormBlock} from '@/shared/services/templateService/renderFormBlock.service';
import {Title} from '@/shared/ui';

export const BillingInfo = ({options, control}): ReactElement => {
  return (
    <Box>
      <Title title="Billing info" description="Please enter your billing info." />
      <Grid container spacing={2}>
        {options?.map((option, index) => (
          <Grid item xs={12} sm={6} key={index}>
            {renderFormBlock({option, control})}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
