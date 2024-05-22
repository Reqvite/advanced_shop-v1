import {FilterI} from '@/slices/filter';

interface FilterKeys {
  [key: string]: string | number | (string | number)[];
}

const duplicateKeyRegex = /^(\w+)(\d+)$/;

export const decodeSearchParams = (searchParams: URLSearchParams): Partial<FilterI> => {
  const decodedParams: Partial<FilterKeys> = {};

  [...searchParams.entries()].forEach(([key, val]) => {
    const match = key.match(duplicateKeyRegex);
    if (match) {
      const [, baseKey, index] = match;
      if (!decodedParams[baseKey]) {
        decodedParams[baseKey] = [];
      }
      (decodedParams[baseKey] as (string | number)[])[parseInt(index)] = isNaN(Number(val))
        ? val
        : Number(val);
    } else {
      decodedParams[key] = isNaN(Number(val)) ? val : Number(val);
    }
  });

  return decodedParams;
};

export const encodeSearchParams = (params: Record<string, any>): URLSearchParams => {
  const searchParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((param, index) => {
        searchParams.append(`${key}${index}`, param);
      });
    } else {
      searchParams.set(key, value);
    }
  });

  return searchParams;
};

export const updateQueryParams = (filters: Partial<FilterI>) => {
  const queryParams = new URLSearchParams(encodeSearchParams(filters));
  window.history.replaceState({}, '', `${window.location.pathname}?${queryParams}`);
};

export const resetQueryParams = () => {
  const queryParams = new URLSearchParams();
  window.history.replaceState({}, '', `${window.location.pathname}?${queryParams}`);
};

export const deleteQueryParamsKey = (key: string) => {
  const queryParams = new URLSearchParams(window.location.search);
  queryParams.delete(key);
  const newUrl = `${window.location.pathname}?${queryParams.toString()}`;
  window.history.replaceState({}, '', newUrl);
};
