import * as yup from 'yup';
import {ErrorMessages} from './errorMessages.const';
import {passwordRegex} from './regex.conts';

const firstName = 'First name';
const lastName = 'Last name';
const address = 'Address';
const country = 'Country';
const city = 'City';
const zip = 'Zip code';
const minLength = 3;
const maxLength = 30;
const zipCodeLength = 5;
const maxLengthAddress = 100;
const maxNotesLength = 500;

const phoneRegex = /^[0-9]{12}$/;
const passwordValidationSchema = yup
  .string()
  .min(3, ErrorMessages.MIN_LENGTH({length: 3, label: 'Password'}))
  .matches(passwordRegex, ErrorMessages.PASSWORD_ERROR_MESSAGE)
  .required(ErrorMessages.PASSWORD_REQUIRED);

const firstNameValidation = yup
  .string()
  .min(minLength, ErrorMessages.AT_LEAST_LENGTH(minLength, firstName))
  .max(maxLength, ErrorMessages.AT_MOST_LENGTH(maxLength, firstName))
  .required(ErrorMessages.IS_REQUIRED(firstName));
const lastNameValidation = yup
  .string()
  .min(minLength, ErrorMessages.AT_LEAST_LENGTH(minLength, lastName))
  .max(maxLength, ErrorMessages.AT_MOST_LENGTH(maxLength, lastName))
  .required(ErrorMessages.IS_REQUIRED(lastName));
const emailValidation = yup
  .string()
  .email(ErrorMessages.INVALID_EMAIL)
  .required(ErrorMessages.EMAIL_REQUIRED);
const phoneNumberValidation = yup
  .string()
  .matches(phoneRegex, 'Phone number must be exactly 12 digits')
  .required(ErrorMessages.IS_REQUIRED('Phone number'));
const addressValidation = yup
  .string()
  .min(minLength, ErrorMessages.AT_LEAST_LENGTH(minLength, address))
  .max(maxLength, ErrorMessages.AT_MOST_LENGTH(maxLengthAddress, address))
  .required(ErrorMessages.IS_REQUIRED(address));
const countryValidation = yup.string().required(ErrorMessages.IS_REQUIRED(country));
const cityValidation = yup.string().required(ErrorMessages.IS_REQUIRED(city));
const zipValidation = yup
  .string()
  .min(minLength, ErrorMessages.AT_LEAST_LENGTH(zipCodeLength, zip))
  .max(maxLength, ErrorMessages.AT_MOST_LENGTH(zipCodeLength, zip))
  .required(ErrorMessages.IS_REQUIRED(zip));
const notesValidation = yup
  .string()
  .max(maxNotesLength, ErrorMessages.AT_MOST_LENGTH(maxNotesLength, 'Order notes'));
const privacyPolicyAgreementValidation = yup
  .boolean()
  .oneOf([true], ErrorMessages.ACCEPT_PRIVACY)
  .required(ErrorMessages.ACCEPT_PRIVACY);

export {
  addressValidation,
  cityValidation,
  countryValidation,
  emailValidation,
  firstNameValidation,
  lastNameValidation,
  notesValidation,
  passwordValidationSchema,
  phoneNumberValidation,
  phoneRegex,
  privacyPolicyAgreementValidation,
  zipValidation
};
