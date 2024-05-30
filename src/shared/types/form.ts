import {SxProps} from '@mui/material';
import {ComponentType, ReactNode} from 'react';
import {AutoCompleteOptionsI, LabelOptionsI} from '@/shared/types/options';
import {SelectStyleVariants} from '../ui';

export enum FormVariantsEnum {
  Input = 'input',
  Quantity_Input = 'quantity-input',
  Select = 'select',
  AutoCompleteSelect = 'auto-complete-select',
  InputWithSelect = 'input-with-select',
  TextArea = 'text-area',
  CheckboxGroup = 'checkbox_group',
  SliderWithInput = 'slider-with-input',
  Slider = 'slider',
  Checkbox = 'checkbox'
}

interface BaseFormOption {
  name?: string;
  id: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  placeholder?: string;
  type?: string;
  min?: number;
  max?: number;
  sx?: SxProps;
}

interface FormOptionVariantMapI {
  [FormVariantsEnum.Input]: {
    variant: FormVariantsEnum.Input;
  };
  [FormVariantsEnum.TextArea]: {
    variant: FormVariantsEnum.TextArea;
  };
  [FormVariantsEnum.Quantity_Input]: {
    variant: FormVariantsEnum.Quantity_Input;
  };
  [FormVariantsEnum.InputWithSelect]: {
    variant: FormVariantsEnum.InputWithSelect;
    options: LabelOptionsI[];
    inputName: string;
    selectName: string;
  };
  [FormVariantsEnum.Select]: {
    variant: FormVariantsEnum.Select;
    options: LabelOptionsI[];
    styleVariant: SelectStyleVariants;
  };
  [FormVariantsEnum.AutoCompleteSelect]: {
    variant: FormVariantsEnum.AutoCompleteSelect;
    options: AutoCompleteOptionsI[];
  };
  [FormVariantsEnum.CheckboxGroup]: {
    variant: FormVariantsEnum.CheckboxGroup;
    options: LabelOptionsI[];
    showCheckbox?: boolean;
    withQuantity?: boolean;
    withShowMore?: boolean;
  };
  [FormVariantsEnum.Slider]: {
    component?: ComponentType;
    variant: FormVariantsEnum.Slider;
  };
  [FormVariantsEnum.SliderWithInput]: {
    variant: FormVariantsEnum.SliderWithInput;
  };
  [FormVariantsEnum.Checkbox]: {
    variant: FormVariantsEnum.Checkbox;
    labelComponent?: ReactNode;
  };
}

export type FormOption<T extends FormVariantsEnum> = BaseFormOption & FormOptionVariantMapI[T];
