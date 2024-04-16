export enum FormInputVariantsEnum {
  Input = 'input'
}

interface BaseFormOption {
  name: string;
  id: string;
  isRequired?: boolean;
  type: string;
}

interface FormOptionVariantMapI {
  [FormInputVariantsEnum.Input]: {
    variant: FormInputVariantsEnum.Input;
  };
}

export type FormOption<T extends FormInputVariantsEnum> = BaseFormOption & FormOptionVariantMapI[T];
