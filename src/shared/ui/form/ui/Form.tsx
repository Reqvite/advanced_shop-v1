import {Box, Stack} from '@mui/material';
import {SxProps} from '@mui/system';
import {ElementType, ReactElement} from 'react';
import {DefaultValues, FieldValues, Resolver, useForm} from 'react-hook-form';
import {renderFormBlock} from '@/shared/services/templateService/renderFormBlock.service';
import {FormOption, FormVariantsEnum} from '@/shared/types/form';
import {Button} from '@/shared/ui';
import {FormHeader} from './FormHeader';

type Props<T> = {
  heading?: string;
  options: FormOption<FormVariantsEnum>[];
  formValidationSchema?: Resolver<any>;
  defaultValues: T;
  onSubmit: (data: T) => void;
  transformData?: (data: T) => void;
  isLoading?: boolean;
  sx?: SxProps;
  buttonLabel?: string;
  withCancel?: boolean;
  onCancel?: () => void;
  ButtonComponent?: ElementType;
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
  buttonLabel = 'Submit',
  onCancel,
  ButtonComponent
}: Props<T>): ReactElement => {
  const {handleSubmit, reset, control, getValues} = useForm<T>({
    resolver: formValidationSchema,
    defaultValues: defaultValues as DefaultValues<T>
  });

  const handleFormSubmit = handleSubmit(() => {
    const formData = getValues();
    const transformedData = transformData ? transformData(formData) : formData;
    onSubmit(transformedData!);
  });

  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    }
    reset();
  };

  return (
    <Box>
      {heading && <FormHeader heading={heading} />}
      <Box component="form" onSubmit={handleFormSubmit}>
        <Stack gap={3} sx={sx}>
          {options.map((option) => renderFormBlock<T>({option, control}))}
          <Stack direction="row" spacing={2}>
            {ButtonComponent ? (
              <ButtonComponent type="submit" isLoading={isLoading} />
            ) : (
              <Button fullWidth type="submit" variant="contained" isLoading={isLoading}>
                {buttonLabel}
              </Button>
            )}
            {onCancel && (
              <Button fullWidth variant="outlined" onClick={handleCancel}>
                Cancel
              </Button>
            )}
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};
