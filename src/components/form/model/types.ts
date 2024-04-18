export enum FormVariantsEnum {
  Input = 'input'
}

interface BaseFormOption {
  name: string;
  id: string;
  isRequired?: boolean;
  type?: string;
}

interface FormOptionVariantMapI {
  [FormVariantsEnum.Input]: {
    variant: FormVariantsEnum.Input;
  };
}

export type FormOption<T extends FormVariantsEnum> = BaseFormOption & FormOptionVariantMapI[T];
