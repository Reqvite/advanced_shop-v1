import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {ErrorMessages} from '@/shared/const/errorMessages.const';

const createMaxQuantity = (min = 1, max = 100) => {
  return yup.object().shape({
    quantity: yup
      .number()
      .min(1, `Quantity must be at least ${min}.`)
      .max(max, !max ? 'Product is out of stock.' : `Only ${max} left.`)
      .required(ErrorMessages.IS_REQUIRED('Quantity'))
  });
};

export const maxQuantitySchema = ({max, min}: {max?: number; min?: number} = {min: 1, max: 100}) =>
  yupResolver(createMaxQuantity(min, max));
