import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {ErrorMessages} from '@/shared/const/errorMessages.const';

export const loginUser = yup.object().shape({
  email: yup.string().email(ErrorMessages.INVALID_EMAIL).required(ErrorMessages.EMAIL_REQUIRED),
  password: yup.string().required(ErrorMessages.PASSWORD_REQUIRED)
});

export const loginUserUserSchema = yupResolver(loginUser);
