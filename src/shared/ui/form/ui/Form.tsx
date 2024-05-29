import {Box, Stack} from '@mui/material';
import {SxProps} from '@mui/system';
import {ElementType, ReactElement, useEffect} from 'react';
import {DefaultValues, FieldValues, Resolver, useForm} from 'react-hook-form';
import {renderFormBlock} from '@/shared/services/templateService/renderFormBlock.service';
import {FormOption, FormVariantsEnum} from '@/shared/types/form';
import {Button} from '@/shared/ui';
import {FormHeader} from './FormHeader';

type Props<T> = {
  heading?: string;
  options: FormOption<FormVariantsEnum>[];
  formValidationSchema?: Resolver<any>;
  defaultValues?: T;
  values?: T;
  onSubmit?: (data: T) => void;
  onChange?: (data: T) => void;
  transformData?: (data: T) => void;
  isLoading?: boolean;
  sx?: SxProps;
  buttonLabel?: string;
  withCancel?: boolean;
  initialTrigger?: boolean;
  onCancel?: () => void;
  ButtonComponent?: ElementType;
};

export const Form = <T extends FieldValues>({
  heading,
  options,
  onChange,
  formValidationSchema,
  onSubmit,
  transformData,
  defaultValues,
  sx,
  isLoading,
  initialTrigger,
  buttonLabel = 'Submit',
  onCancel,
  ButtonComponent,
  values
}: Props<T>): ReactElement => {
  const {handleSubmit, reset, control, getValues, trigger, watch} = useForm<T>({
    resolver: formValidationSchema,
    defaultValues: defaultValues as DefaultValues<T>,
    values
  });

  const handleFormSubmit = handleSubmit(() => {
    const formData = getValues();
    const transformedData = transformData ? transformData(formData) : formData;
    if (onSubmit) {
      onSubmit(transformedData as T);
    }
  });

  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    }
    reset();
  };

  useEffect(() => {
    if (initialTrigger) {
      trigger();
    }
  }, [initialTrigger, trigger, options]);

  useEffect(() => {
    if (onChange) {
      const subscription = watch(() => {
        return handleSubmit(onChange)();
      });
      return () => subscription.unsubscribe();
    }
  }, [handleSubmit, onChange, onSubmit, watch]);

  return (
    <Box>
      {heading && <FormHeader heading={heading} />}
      <Box component="form" onSubmit={handleFormSubmit}>
        <Stack gap={3} sx={sx}>
          {options.map((option) => renderFormBlock<T>({option, control}))}
          {onSubmit && (
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
          )}
        </Stack>
      </Box>
    </Box>
  );
};
