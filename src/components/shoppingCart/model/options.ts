import {CountryOption} from '@/shared/types/country';
import {FormVariantsEnum} from '@/shared/types/form';

export const getShoppingCartOptions = ({
  countryOptions,
  citiesOptions,
  isCitiesSelectDisabled
}: {
  countryOptions: CountryOption[];
  citiesOptions: CountryOption[];
  isCitiesSelectDisabled: boolean;
}) => [
  {id: 'name', variant: FormVariantsEnum.Input, name: 'Name', isRequired: true},
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
    variant: FormVariantsEnum.NativeSelect,
    options: countryOptions,
    name: 'Country',
    isRequired: true
  },
  {
    id: 'city',
    variant: FormVariantsEnum.NativeSelect,
    options: citiesOptions,
    name: 'City',
    isRequired: true,
    isDisabled: isCitiesSelectDisabled
  },
  {
    id: 'zip',
    variant: FormVariantsEnum.Input,
    name: 'Zip code',
    isRequired: true
  }
];
