import {ElementType, ReactElement} from 'react';
import {Control, Controller, FieldValues, Path} from 'react-hook-form';
import {FormOption, FormVariantsEnum} from '@/shared/types/form';
import {Input} from './Input';

interface Props<T extends FieldValues> {
  option: FormOption<FormVariantsEnum>;
  control: Control<T>;
  InputComponent?: ElementType;
}

export const InputWithController = <T extends FieldValues>({
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
          required={option.isRequired}
          key={option.id}
          type={option.type}
          label={option.name}
          placeholder={option.name}
          error={error?.message}
          max={option.max}
          min={option.min}
          {...field}
        />
      )}
    />
  );
};
