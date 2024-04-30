import {ReactElement} from 'react';
import {Control, FieldValues} from 'react-hook-form';
import {FormOption, FormVariantsEnum} from '@/shared/types/form';
import {Checkbox, QuantityInput, Slider, SliderWithInput} from '@/shared/ui';
import {ControllerWrapper} from '@/shared/ui/box/ControllerWrapper';
import {CheckboxGroup} from '@/shared/ui/checkbox/CheckboxGroup';

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
      return <ControllerWrapper key={option.id} option={option} control={control} />;
    case FormVariantsEnum.Quantity_Input:
      return (
        <ControllerWrapper
          InputComponent={QuantityInput}
          key={option.id}
          option={option}
          control={control}
        />
      );
    case FormVariantsEnum.Select:
      return <ControllerWrapper key={option.id} option={option} control={control} />;
    case FormVariantsEnum.Slider:
      return (
        <ControllerWrapper
          InputComponent={Slider}
          key={option.id}
          option={option}
          control={control}
        />
      );
    case FormVariantsEnum.SliderWithInput:
      return (
        <ControllerWrapper
          InputComponent={SliderWithInput}
          key={option.id}
          option={option}
          control={control}
        />
      );
    case FormVariantsEnum.CheckboxGroup:
      return (
        <ControllerWrapper
          InputComponent={CheckboxGroup}
          key={option.id}
          option={option}
          control={control}
        />
      );
    case FormVariantsEnum.Checkbox:
      return (
        <ControllerWrapper
          InputComponent={Checkbox}
          key={option.id}
          option={option}
          control={control}
        />
      );
  }
};
