import {Box, Stack} from '@mui/material';
import {ReactElement} from 'react';
import {DefaultValues, FieldValues, Resolver, useForm} from 'react-hook-form';
import {Button} from '@/shared/ui';
import {renderFormBlock} from '../model/renderFormBlock';
import {FormInputVariantsEnum, FormOption} from '../model/types';
import {FormHeader} from './FormHeader';

type Props<T> = {
  heading?: string;
  options: FormOption<FormInputVariantsEnum>[];
  formValidationSchema?: Resolver<any>;
  defaultValues: T;
  onSubmit: (data: T) => void;
  transformData?: (data: T) => void;
  isLoading?: boolean;
};

export const Form = <T extends FieldValues>({
  heading,
  options,
  formValidationSchema,
  onSubmit,
  transformData,
  defaultValues,
  isLoading
}: Props<T>): ReactElement => {
  const {handleSubmit, control, getValues} = useForm<T>({
    resolver: formValidationSchema,
    defaultValues: defaultValues as DefaultValues<T>
  });

  const handleFormSubmit = handleSubmit(() => {
    const formData = getValues();
    const transformedData = transformData ? transformData(formData) : formData;
    onSubmit(transformedData!);
  });

  return (
    <Box>
      {heading && <FormHeader heading={heading} />}
      <Box component="form" onSubmit={handleFormSubmit}>
        <Stack gap={4}>
          {options.map((option) => renderFormBlock<T>({option, control}))}
          <Button type="submit" loading={isLoading}>
            Send
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};
