import {Box, Stack} from '@mui/material';
import {SxProps} from '@mui/system';
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
  sx?: SxProps;
  buttonLabel?: string;
};

export const Form = <T extends FieldValues>({
  heading,
  options,
  formValidationSchema,
  onSubmit,
  transformData,
  defaultValues,
  sx,
  isLoading,
  buttonLabel = 'Submit'
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
        <Stack gap={3} sx={sx}>
          {options.map((option) => renderFormBlock<T>({option, control}))}
          <Button type="submit" variant="contained" isLoading={isLoading}>
            {buttonLabel}
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};
