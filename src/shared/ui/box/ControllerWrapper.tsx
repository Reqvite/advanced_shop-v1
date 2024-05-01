import {ElementType, ReactElement} from 'react';
import {Control, Controller, FieldValues, Path} from 'react-hook-form';
import {FormOption, FormVariantsEnum} from '@/shared/types/form';
import {Input} from '../input/Input';

interface Props<T extends FieldValues> {
  option: FormOption<FormVariantsEnum>;
  control: Control<T>;
  InputComponent?: ElementType;
}

export const ControllerWrapper = <T extends FieldValues>({
  option,
  control,
  InputComponent = Input
}: Props<T>): ReactElement => {
  const variant = option.variant;
  let baseProps: any = {
    required: option.isRequired,
    key: option.id,
    type: option.type,
    label: option.name,
    placeholder: option.name,
    max: option.max,
    min: option.min
  };

  if (variant === FormVariantsEnum.CheckboxGroup) {
    baseProps = {...baseProps, options: option.options, control};
  }
  if (variant === FormVariantsEnum.Slider) {
    baseProps = {...baseProps, iconComponent: option.component};
  }
  if (variant === FormVariantsEnum.Checkbox) {
    delete baseProps['type'];
  }

  return (
    <Controller
      control={control}
      name={option.id as Path<T>}
      render={({field, fieldState: {error}}) => (
        <InputComponent error={error?.message} {...baseProps} {...field} />
      )}
    />
  );
};
