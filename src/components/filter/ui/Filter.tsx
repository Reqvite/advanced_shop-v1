import {FormControl, Stack} from '@mui/material';
import {ReactElement} from 'react';
import {DefaultValues, FieldValues, useForm} from 'react-hook-form';
import {renderFormBlock} from '@/shared/services/templateService/renderFormBlock.service';
import {FormOption, FormVariantsEnum} from '@/shared/types/form';

interface Props<T> {
  options: FormOption<FormVariantsEnum>[];
  defaultValues: T;
  onSubmit?: (data: T) => void;
}

export const Filter = <T extends FieldValues>({defaultValues, options}: Props<T>): ReactElement => {
  const {control, watch} = useForm<T>({defaultValues: defaultValues as DefaultValues<T>});

  console.log(watch());
  return (
    <FormControl component="form">
      <Stack gap={3}>{options.map((option) => renderFormBlock<T>({option, control}))}</Stack>
    </FormControl>
  );
};
