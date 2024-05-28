import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  emailValidation,
  firstNameValidation,
  lastNameValidation,
  passwordValidationSchema,
  phoneNumberValidation
} from '@/shared/const/validation.const';

export const createUser = yup.object().shape({
  firstName: firstNameValidation,
  lastName: lastNameValidation,
  email: emailValidation,
  password: passwordValidationSchema,
  phoneNumber: phoneNumberValidation
});

export const createUserSchema = yupResolver(createUser);
