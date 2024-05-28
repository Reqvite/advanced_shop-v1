import {Box, Stack} from '@mui/material';
import {ReactElement} from 'react';
import {Control, FieldValues} from 'react-hook-form';
import {checkoutStyles} from '@/app/theme/styles';
import {renderFormBlock} from '@/shared/services/templateService/renderFormBlock.service';
import {FormOption, FormVariantsEnum} from '@/shared/types/form';
import {Button, Title} from '@/shared/ui';

type Props<T extends FieldValues> = {
  options: FormOption<FormVariantsEnum>[];
  control: Control<T>;
};

export const Confirmation = <T extends FieldValues>({options, control}: Props<T>): ReactElement => {
  return (
    <Box mt="64px">
      <Title
        title="Confirmation"
        description="We are getting to the end. Just few clicks and your order is ready!"
      />
      <Stack mt="32px" gap={2}>
        {options?.map((option) => renderFormBlock({option, control}))}
      </Stack>
      <Button type="submit" sx={checkoutStyles.completeOrderButton} variant="contained">
        Complete order
      </Button>
    </Box>
  );
};
