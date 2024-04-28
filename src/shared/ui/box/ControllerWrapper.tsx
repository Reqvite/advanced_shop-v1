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
  return (
    <Controller
      control={control}
      name={option.id as Path<T>}
      render={({field, fieldState: {error}}) => (
        <InputComponent
          control={control}
          required={option.isRequired}
          key={option.id}
          type={option.type}
          label={option.name}
          placeholder={option.name}
          error={error?.message}
          max={option.max}
          min={option.min}
          options={option?.options}
          {...field}
        />
      )}
    />
  );
};
