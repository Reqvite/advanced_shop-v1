import * as yup from 'yup';
import {ErrorMessages} from './errorMessages.const';
import {maxRating, minRating} from './product.const';
import {passwordRegex} from './regex.conts';

const labels = {
  firstName: 'First name',
  lastName: 'Last name',
  address: 'Address',
  country: 'Country',
  city: 'City',
  zip: 'Zip code',
  rating: 'Rating',
  review: 'Review'
};
const lengths = {
  minRating,
  maxRating,
  minMessageLength: 10,
  maxMessageLength: 300,
  minLength: 3,
  maxLength: 30,
  zipCodeLength: 5,
  maxLengthAddress: 100,
  maxNotesLength: 500
};

const phoneRegex = /^[0-9]{12}$/;
const passwordValidationSchema = yup
  .string()
  .min(3, ErrorMessages.MIN_LENGTH({length: 3, label: 'Password'}))
  .matches(passwordRegex, ErrorMessages.PASSWORD_ERROR_MESSAGE)
  .required(ErrorMessages.PASSWORD_REQUIRED);

const ratingValidation = (min = lengths.minRating) =>
  yup
    .number()
    .min(min, ErrorMessages.IS_REQUIRED(labels.rating))
    .max(lengths.maxRating, ErrorMessages.AT_MOST_LENGTH(lengths.maxRating, labels.rating))
    .required(ErrorMessages.IS_REQUIRED(labels.rating));
const messageValidation = yup
  .string()
  .min(
    lengths.minMessageLength,
    ErrorMessages.AT_LEAST_LENGTH(lengths.minMessageLength, labels.review)
  )
  .max(
    lengths.maxMessageLength,
    ErrorMessages.AT_MOST_LENGTH(lengths.maxMessageLength, labels.review)
  )
  .required();
const firstNameValidation = yup
  .string()
  .min(lengths.minLength, ErrorMessages.AT_LEAST_LENGTH(lengths.minLength, labels.firstName))
  .max(lengths.maxLength, ErrorMessages.AT_MOST_LENGTH(lengths.maxLength, labels.firstName))
  .required(ErrorMessages.IS_REQUIRED(labels.firstName));
const lastNameValidation = yup
  .string()
  .min(lengths.minLength, ErrorMessages.AT_LEAST_LENGTH(lengths.minLength, labels.lastName))
  .max(lengths.maxLength, ErrorMessages.AT_MOST_LENGTH(lengths.maxLength, labels.lastName))
  .required(ErrorMessages.IS_REQUIRED(labels.lastName));
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
  .min(lengths.minLength, ErrorMessages.AT_LEAST_LENGTH(lengths.minLength, labels.address))
  .max(lengths.maxLength, ErrorMessages.AT_MOST_LENGTH(lengths.maxLengthAddress, labels.address))
  .required(ErrorMessages.IS_REQUIRED(labels.address));
const countryValidation = yup.string().required(ErrorMessages.IS_REQUIRED(labels.country));
const cityValidation = yup.string().required(ErrorMessages.IS_REQUIRED(labels.city));
const zipValidation = yup
  .string()
  .min(lengths.minLength, ErrorMessages.AT_LEAST_LENGTH(lengths.zipCodeLength, labels.zip))
  .max(lengths.maxLength, ErrorMessages.AT_MOST_LENGTH(lengths.zipCodeLength, labels.zip))
  .required(ErrorMessages.IS_REQUIRED(labels.zip));
const notesValidation = yup
  .string()
  .max(lengths.maxNotesLength, ErrorMessages.AT_MOST_LENGTH(lengths.maxNotesLength, 'Order notes'));
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
  messageValidation,
  notesValidation,
  passwordValidationSchema,
  phoneNumberValidation,
  phoneRegex,
  privacyPolicyAgreementValidation,
  ratingValidation,
  zipValidation
};
