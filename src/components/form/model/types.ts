export enum FormVariantsEnum {
  Input = 'input',
  Quantity_Input = 'quantity-input'
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
}

export type FormOption<T extends FormVariantsEnum> = BaseFormOption & FormOptionVariantMapI[T];
