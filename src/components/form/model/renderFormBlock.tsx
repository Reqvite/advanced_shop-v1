import {ReactElement} from 'react';
import {Control, FieldValues} from 'react-hook-form';
import {InputWithController, PasswordInput} from '@/shared/ui';
import {FormOption, FormVariantsEnum} from './types';

type Props<T extends FieldValues> = {
  option: FormOption<FormVariantsEnum>;
  control: Control<T>;
};

export const renderFormBlock = <T extends FieldValues>({
  option,
  control
}: Props<T>): ReactElement => {
  switch (option.variant) {
    case FormVariantsEnum.Input:
      return <InputWithController key={option.id} option={option} control={control} />;
    case FormVariantsEnum.PasswordInput:
      return (
        <InputWithController
          key={option.id}
          InputComponent={PasswordInput}
          option={option}
          control={control}
        />
      );
  }
};
