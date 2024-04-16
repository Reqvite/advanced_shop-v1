import {ReactElement} from 'react';
import {Control, FieldValues} from 'react-hook-form';
import {InputWithController} from '@/shared/ui';
import {FormInputVariantsEnum, FormOption} from './types';

type Props<T extends FieldValues> = {
  option: FormOption<FormInputVariantsEnum>;
  control: Control<T>;
};

export const renderFormBlock = <T extends FieldValues>({
  option,
  control
}: Props<T>): ReactElement => {
  switch (option.variant) {
    case FormInputVariantsEnum.Input:
      return <InputWithController key={option.id} option={option} control={control} />;
  }
};