import {ReactElement} from 'react';
import {Control, Controller, FieldValues, Path} from 'react-hook-form';
import {FormOption, FormVariantsEnum} from '@/shared/types/form';
import {CheckboxGroup} from './CheckboxGroup';

interface Props<T extends FieldValues> {
  option: FormOption<FormVariantsEnum.CheckboxGroup>;
  control: Control<T>;
}

export const CheckboxGroupWithController = <T extends FieldValues>({
  option,
  control
}: Props<T>): ReactElement => {
  return (
    <Controller
      key={option.id}
      control={control}
      name={option.id as Path<T>}
      render={({field}) => (
        <CheckboxGroup
          control={control}
          label={option.name}
          key={option.id}
          options={option.options}
          {...field}
        />
      )}
    />
  );
};
