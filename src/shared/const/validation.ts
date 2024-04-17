import * as yup from 'yup';
import {ErrorMessages} from './errorMessages';

export const passwordRegex =
  /^(?=.*[a-z].*[a-z])(?=.*[A-Z].*[A-Z])(?=.*\d.*\d)(?=.*[^a-zA-Z0-9].*[^a-zA-Z0-9]).*$/;
export const phoneRegex = /^[0-9]{12}$/;
export const passwordValidationSchema = yup
  .string()
  .min(3, ErrorMessages.MIN_LENGTH({length: 3, label: 'Password'}))
  .matches(
    /^(?=.*[a-z].*[a-z])(?=.*[A-Z].*[A-Z])(?=.*\d.*\d)(?=.*[^a-zA-Z0-9].*[^a-zA-Z0-9]).*$/,
    'Password must contain at least 2 lowercase, 2 uppercase, 2 digits, and 2 special characters'
  )
  .required(ErrorMessages.PASSWORD_REQUIRED);
export const nameMinMaxLength = yup.string().min(3).max(30).required();
