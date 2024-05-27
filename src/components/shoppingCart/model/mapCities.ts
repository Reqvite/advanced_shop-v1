import {CountryI, CountryOption} from '@/shared/types/country';

export const mapCities = (
  countries: CountryI[],
  selectedCountry: string | number
): CountryOption[] => {
  const cities: CountryOption[] =
    countries
      ?.find((item) => String(item.country) === String(selectedCountry))
      ?.cities.map((city) => ({
        label: city,
        value: city,
        _id: city
      })) || [];
  return [{label: 'Select city', value: '0', _id: '0'}, ...cities];
};
