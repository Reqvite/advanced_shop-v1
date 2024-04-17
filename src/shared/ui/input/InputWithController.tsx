import {ReactElement} from 'react';
import {Control, Controller, FieldValues, Path} from 'react-hook-form';
import {FormInputVariantsEnum, FormOption} from '@/components/form';
import {Input} from './Input';

interface Props<T extends FieldValues> {
  option: FormOption<FormInputVariantsEnum>;
  control: Control<T>;
  InputComponent?: any;
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
          key={option.id}
          type={option.type}
          label={option.name}
          placeholder={option.name}
          error={error?.message}
          {...field}
        />
      )}
    />
  );
};
