import {nanoid} from '@reduxjs/toolkit';
import {CountryI} from '@/shared/types/country';
import {AutoCompleteOptionsI} from '@/shared/types/options';

export const transformCountriesResponse = (items: CountryI[]): AutoCompleteOptionsI[] => {
  const countries = new Set();
  return items
    .map((item) => ({
      label: item.name,
      _id: item.name,
      iso3: item.iso3
    }))
    .filter((item) => {
      if (countries.has(item.label)) {
        return false;
      }
      countries.add(item.label);
      return true;
    });
};

export const transformCountryCitiesResponse = (cities: string[]): AutoCompleteOptionsI[] => {
  return cities.map((city) => ({
    label: city,
    _id: nanoid()
  }));
};
