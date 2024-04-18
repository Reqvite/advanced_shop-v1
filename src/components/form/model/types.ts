export enum FormVariantsEnum {
  Input = 'input',
  PasswordInput = 'password-input'
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
  [FormVariantsEnum.PasswordInput]: {
    variant: FormVariantsEnum.PasswordInput;
  };
}

export type FormOption<T extends FormVariantsEnum> = BaseFormOption & FormOptionVariantMapI[T];
