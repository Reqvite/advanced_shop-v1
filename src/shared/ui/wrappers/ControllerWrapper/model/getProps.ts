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
  const baseProps: BasePropsI<T> = {
    required: option.isRequired,
    key: option.id,
    type: option.type,
    label: option.name,
    placeholder: option.name,
    max: option.max,
    min: option.min
  };

  switch (variant) {
    case FormVariantsEnum.Select:
      return {...baseProps, options: option.options, styleVariant: option.styleVariant};
    case FormVariantsEnum.CheckboxGroup:
      return {...baseProps, options: option.options, control};
    case FormVariantsEnum.Slider:
      return {...baseProps, iconComponent: option.component};
    case FormVariantsEnum.Checkbox:
      delete baseProps['type'];
      return baseProps;
    default:
      return baseProps;
  }
};
