import {Typography} from '@mui/material';
import {getRouteMain} from '@/app/providers/AppRouter/routeConfig';
import {FormOption, FormVariantsEnum} from '@/shared/types/form';
import {AutoCompleteOptionsI} from '@/shared/types/options';
import {AppLink} from '@/shared/ui';

export const getShoppingCartOptions = ({
  countryOptions,
  citiesOptions,
  isCitiesSelectDisabled
}: {
  countryOptions?: AutoCompleteOptionsI[];
  citiesOptions?: AutoCompleteOptionsI[];
  isCitiesSelectDisabled: boolean;
}): FormOption<FormVariantsEnum>[] => [
  {id: 'firstName', variant: FormVariantsEnum.Input, name: 'Name', isRequired: true},
  {
    id: 'lastName',
    variant: FormVariantsEnum.Input,
    name: 'Last name',
    isRequired: true
  },
  {id: 'email', variant: FormVariantsEnum.Input, name: 'Email', isRequired: true},
  {
    id: 'address',
    variant: FormVariantsEnum.Input,
    name: 'Address',
    isRequired: true
  },
  {
    id: 'phoneNumber',
    variant: FormVariantsEnum.Input,
    type: 'number',
    name: 'Phone number',
    isRequired: true
  },
  {
    id: 'country',
    variant: FormVariantsEnum.AutoCompleteSelect,
    options: countryOptions || [],
    name: 'Country',
    isRequired: true
  },
  {
    id: 'city',
    variant: FormVariantsEnum.AutoCompleteSelect,
    options: citiesOptions || [],
    name: 'City',
    isRequired: true,
    isDisabled: isCitiesSelectDisabled
  },
  {
    id: 'zip',
    variant: FormVariantsEnum.Input,
    type: 'number',
    name: 'Zip code',
    isRequired: true
  }
];

export const additionalInfoOptions: FormOption<FormVariantsEnum>[] = [
  {
    id: 'notes',
    variant: FormVariantsEnum.TextArea,
    name: 'Order notes',
    placeholder: 'Need a specific delivery day? Sending a gift? Let`s say ...',
    sx: {height: '100px'}
  }
];

export const confirmationOptions: FormOption<FormVariantsEnum>[] = [
  {
    id: 'newsLatterAgreement',
    variant: FormVariantsEnum.Checkbox,
    name: 'I agree with sending an Marketing and newsletter emails. No spam, promised!'
  },
  {
    id: 'privacyPolicyAgreement',
    variant: FormVariantsEnum.Checkbox,
    name: 'privacyPolicyAgreement',
    labelComponent: (
      <Typography className="body2">
        I agree with our <AppLink to={getRouteMain()}>terms and conditions</AppLink> and{' '}
        <AppLink to={getRouteMain()}>privacy policy</AppLink>.
      </Typography>
    )
  }
];
