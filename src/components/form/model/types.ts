export enum FormInputVariantsEnum {
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
  [FormInputVariantsEnum.Input]: {
    variant: FormInputVariantsEnum.Input;
  };
  [FormInputVariantsEnum.PasswordInput]: {
    variant: FormInputVariantsEnum.PasswordInput;
  };
}

export type FormOption<T extends FormInputVariantsEnum> = BaseFormOption & FormOptionVariantMapI[T];
