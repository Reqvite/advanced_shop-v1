import {Box, Grid} from '@mui/material';
import {ReactElement} from 'react';
import {Control, FieldValues} from 'react-hook-form';
import {renderFormBlock} from '@/shared/services/templateService/renderFormBlock.service';
import {FormOption, FormVariantsEnum} from '@/shared/types/form';
import {Title} from '@/shared/ui';

type Props<T extends FieldValues> = {
  options: FormOption<FormVariantsEnum>[];
  control: Control<T>;
};

export const BillingInfo = <T extends FieldValues>({options, control}: Props<T>): ReactElement => {
  return (
    <Box>
      <Title title="Billing info" description="Please enter your billing info." />
      <Grid container spacing={2}>
        {options?.map((option, index) => (
          <Grid mt="32px" item xs={12} sm={6} key={index}>
            {renderFormBlock({option, control})}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
