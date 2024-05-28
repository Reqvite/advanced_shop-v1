import {Box} from '@mui/material';
import {ReactElement} from 'react';
import {Control, FieldValues} from 'react-hook-form';
import {renderFormBlock} from '@/shared/services/templateService/renderFormBlock.service';
import {FormOption, FormVariantsEnum} from '@/shared/types/form';
import {Title} from '@/shared/ui';

type Props<T extends FieldValues> = {
  options: FormOption<FormVariantsEnum>[];
  control: Control<T>;
};

export const AdditionalInfo = <T extends FieldValues>({
  options,
  control
}: Props<T>): ReactElement => {
  return (
    <Box mt="64px">
      <Title
        title="Additional information"
        description="Need something else? We will make it for you!"
      />
      <Box mt="32px">{options?.map((option) => renderFormBlock({option, control}))}</Box>
    </Box>
  );
};
