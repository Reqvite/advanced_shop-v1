import {Control, Controller, FieldValues, Path} from 'react-hook-form';
import {FormInputVariantsEnum, FormOption} from '@/components/form';
import {Input} from './Input';

interface Props<T extends FieldValues> {
  option: FormOption<FormInputVariantsEnum>;
  control: Control<T>;
}

export const InputWithController = <T extends FieldValues>({option, control}: Props<T>) => {
  return (
    <Controller
      control={control}
      name={option.id as Path<T>}
      render={({field, fieldState: {error}}) => (
        <Input
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
