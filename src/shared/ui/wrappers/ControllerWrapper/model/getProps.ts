import {SxProps} from '@mui/material';
import {ElementType} from 'react';
import {Control, FieldValues} from 'react-hook-form';
import {FormOption, FormVariantsEnum} from '@/shared/types/form';
import {LabelOptionsI} from '@/shared/types/options';

interface BasePropsI<T extends FieldValues> {
  required?: boolean;
  disabled?: boolean;
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
  withQuantity?: boolean;
  iconComponent?: ElementType;
  sx?: SxProps;
  inputName?: string;
  selectName?: string;
  withShowMore?: boolean;
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
    disabled: option.isDisabled,
    key: option.id,
    type: option.type,
    label: option.name,
    placeholder: option.placeholder,
    max: option.max,
    min: option.min,
    sx: option.sx
  };

  switch (variant) {
    case FormVariantsEnum.AutoCompleteSelect:
      return {
        ...baseProps,
        options: option.options
      };
    case FormVariantsEnum.Select:
      return {
        ...baseProps,
        options: option.options,
        styleVariant: option.styleVariant
      };
    case FormVariantsEnum.InputWithSelect:
      return {
        ...baseProps,
        options: option.options,
        control,
        inputName: option.inputName,
        selectName: option.selectName
      };
    case FormVariantsEnum.CheckboxGroup:
      return {
        ...baseProps,
        options: option.options,
        control,
        showCheckbox: option.showCheckbox,
        withQuantity: option.withQuantity,
        withShowMore: option.withShowMore
      };
    case FormVariantsEnum.Slider:
      return {...baseProps, iconComponent: option.component};
    case FormVariantsEnum.Checkbox:
      delete baseProps['type'];
      return {...baseProps, labelComponent: option.labelComponent};
    default:
      return baseProps;
  }
};
