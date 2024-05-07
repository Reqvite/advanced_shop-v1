import {ElementType} from 'react';
import {Control, FieldValues} from 'react-hook-form';
import {FormOption, FormVariantsEnum} from '@/shared/types/form';
import {LabelOptionsI} from '@/shared/types/options';

interface BasePropsI<T extends FieldValues> {
  required?: boolean;
  key: string;
  type?: string;
  label?: string;
  placeholder?: string;
  max?: number;
  min?: number;
  options?: LabelOptionsI[];
  control?: Control<T>;
  styleVariant?: string;
  showCheckbox?: boolean;
  iconComponent?: ElementType;
}

export const getProps = <T extends FieldValues>({
  option,
  control
}: {
  option: FormOption<FormVariantsEnum>;
  control: Control<T>;
}) => {
  const variant = option.variant;
  let baseProps: BasePropsI<T> = {
    required: option.isRequired,
    key: option.id,
    type: option.type,
    label: option.name,
    placeholder: option.name,
    max: option.max,
    min: option.min
  };

  if (variant === FormVariantsEnum.Select) {
    baseProps = {...baseProps, options: option.options, styleVariant: option.styleVariant};
  }
  if (variant === FormVariantsEnum.CheckboxGroup) {
    baseProps = {...baseProps, options: option.options, showCheckbox: option.showCheckbox, control};
  }
  if (variant === FormVariantsEnum.Slider) {
    baseProps = {...baseProps, iconComponent: option.component};
  }
  if (variant === FormVariantsEnum.Checkbox) {
    delete baseProps['type'];
  }

  return baseProps;
};
