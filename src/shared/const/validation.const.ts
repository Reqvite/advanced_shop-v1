import * as yup from 'yup';
import {ErrorMessages} from './errorMessages.const';
import {passwordRegex} from './regex.conts';

export const phoneRegex = /^[0-9]{12}$/;
export const passwordValidationSchema = yup
  .string()
  .min(3, ErrorMessages.MIN_LENGTH({length: 3, label: 'Password'}))
  .matches(passwordRegex, ErrorMessages.PASSWORD_ERROR_MESSAGE)
  .required(ErrorMessages.PASSWORD_REQUIRED);
export const nameMinMaxLength = yup.string().min(3).max(30).required();
