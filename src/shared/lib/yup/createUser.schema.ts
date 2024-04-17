import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {ErrorMessages} from '@/shared/const/errorMessages';
import {passwordValidationSchema} from '@/shared/const/validation';

const firstName = 'First name';
const lastName = 'Last name';
const minLength = 3;
const maxLength = 30;

export const createUser = yup.object().shape({
  firstName: yup
    .string()
    .min(minLength, ErrorMessages.AT_LEAST_LENGTH(minLength, firstName))
    .max(maxLength, ErrorMessages.AT_MOST_LENGTH(maxLength, firstName))
    .required(ErrorMessages.IS_REQUIRED(firstName)),
  lastName: yup
    .string()
    .min(minLength, ErrorMessages.AT_LEAST_LENGTH(minLength, lastName))
    .max(maxLength, ErrorMessages.AT_MOST_LENGTH(maxLength, lastName))
    .required(ErrorMessages.IS_REQUIRED(lastName)),
  email: yup.string().email(ErrorMessages.INVALID_EMAIL).required(ErrorMessages.EMAIL_REQUIRED),
  password: passwordValidationSchema,
  phoneNumber: yup.string()
});

export const createUserSchema = yupResolver(createUser);
