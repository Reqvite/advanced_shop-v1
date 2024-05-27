import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {ErrorMessages} from '@/shared/const/errorMessages.const';

const createMaxQuantity = (min = 1, max = 100) => {
  return yup.object().shape({
    quantity: yup
      .number()
      .min(1, ErrorMessages.MIN_QUANTITY(min))
      .max(max, !max ? ErrorMessages.OUT_OF_STOCK : ErrorMessages.ITEMS_LEFT(max))
      .required(ErrorMessages.IS_REQUIRED('Quantity'))
  });
};

export const maxQuantitySchema = ({max, min}: {max?: number; min?: number} = {min: 1, max: 100}) =>
  yupResolver(createMaxQuantity(min, max));
