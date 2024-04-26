import {LabelOptionsI} from '@/shared/types/options';

export enum FormVariantsEnum {
  Input = 'input',
  Quantity_Input = 'quantity-input',
  Select = 'select',
  CheckboxGroup = 'checkbox_group',
  PriceRange = 'price_range'
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
  };
  [FormVariantsEnum.CheckboxGroup]: {
    variant: FormVariantsEnum.CheckboxGroup;
    options: {label: string; value: number}[];
  };
  [FormVariantsEnum.PriceRange]: {
    variant: FormVariantsEnum.PriceRange;
  };
}

export type FormOption<T extends FormVariantsEnum> = BaseFormOption & FormOptionVariantMapI[T];
