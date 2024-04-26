import {ReactElement} from 'react';
import {Control, FieldValues} from 'react-hook-form';
import {FormOption, FormVariantsEnum} from '@/shared/types/form';
import {
  CheckboxGroupWithController,
  InputWithController,
  PriceRangeInput,
  QuantityInput
} from '@/shared/ui';

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
    case FormVariantsEnum.Quantity_Input:
      return (
        <InputWithController
          InputComponent={QuantityInput}
          key={option.id}
          option={option}
          control={control}
        />
      );
    case FormVariantsEnum.Select:
      return <InputWithController key={option.id} option={option} control={control} />;
    case FormVariantsEnum.PriceRange:
      return (
        <InputWithController
          InputComponent={PriceRangeInput}
          key={option.id}
          option={option}
          control={control}
        />
      );
    case FormVariantsEnum.CheckboxGroup:
      return <CheckboxGroupWithController key={option.id} option={option} control={control} />;
  }
};
