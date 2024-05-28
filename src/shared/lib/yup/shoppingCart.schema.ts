import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  addressValidation,
  cityValidation,
  countryValidation,
  emailValidation,
  firstNameValidation,
  lastNameValidation,
  notesValidation,
  phoneNumberValidation,
  privacyPolicyAgreementValidation,
  zipValidation
} from '@/shared/const/validation.const';

export const shoppingCart = yup.object().shape({
  firstName: firstNameValidation,
  lastName: lastNameValidation,
  email: emailValidation,
  address: addressValidation,
  phoneNumber: phoneNumberValidation,
  country: countryValidation,
  city: cityValidation,
  zip: zipValidation,
  notes: notesValidation,
  privacyPolicyAgreement: privacyPolicyAgreementValidation,
  newsLatterAgreement: yup.boolean()
});

export const shoppingCartSchema = yupResolver(shoppingCart);
