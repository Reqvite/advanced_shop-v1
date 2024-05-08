import {ComponentType} from 'react';
import {LabelOptionsI} from '@/shared/types/options';
import {SelectStyleVariants} from '../ui';

export enum FormVariantsEnum {
  Input = 'input',
  Quantity_Input = 'quantity-input',
  Select = 'select',
  CheckboxGroup = 'checkbox_group',
  SliderWithInput = 'slider-with-input',
  Slider = 'slider',
  Checkbox = 'checkbox'
}

interface BaseFormOption {
  name?: string;
  id: string;
  isRequired?: boolean;
  type?: string;
  min?: number;
  max?: number;
}

interface FormOptionVariantMapI {
  [FormVariantsEnum.Input]: {
    variant: FormVariantsEnum.Input;
  };
  [FormVariantsEnum.Quantity_Input]: {
    variant: FormVariantsEnum.Quantity_Input;
  };
  [FormVariantsEnum.Select]: {
    variant: FormVariantsEnum.Select;
    options: LabelOptionsI[];
    styleVariant: SelectStyleVariants;
  };
  [FormVariantsEnum.CheckboxGroup]: {
    variant: FormVariantsEnum.CheckboxGroup;
    options: LabelOptionsI[];
    showCheckbox?: boolean;
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
  };
}

export type FormOption<T extends FormVariantsEnum> = BaseFormOption & FormOptionVariantMapI[T];
