import {nanoid} from '@reduxjs/toolkit';
import {CountryI} from '@/shared/types/country';

export const transformCountriesResponse = (items: CountryI[]) => {
  const countries = new Set();
  return items
    .map((item) => ({
      label: item.name,
      _id: item.name
    }))
    .filter((item) => {
      if (countries.has(item.label)) {
        return false;
      }
      countries.add(item.label);
      return true;
    });
};

export const transformCountryCitiesResponse = (cities: string[]) => {
  return cities.map((city) => ({
    label: city,
    _id: nanoid()
  }));
};
