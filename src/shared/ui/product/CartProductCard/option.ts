import {FormOption, FormVariantsEnum} from '@/shared/types/form';

export const cartProductCardOptions = ({
  maxQuantity
}: {
  maxQuantity: number;
}): FormOption<FormVariantsEnum>[] => {
  return [{id: 'quantity', variant: FormVariantsEnum.Quantity_Input, max: maxQuantity, min: 1}];
};
