import {FormOption, FormVariantsEnum} from '@/shared/types/form';
import {AutoCompleteOptionsI} from '@/shared/types/options';

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
