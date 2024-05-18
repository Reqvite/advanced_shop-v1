import {FilterKeys} from '@/shared/types/filter';

const duplicateKeyRegex = /^(\w+)(\d+)$/;

export const decodeSearchParams = (searchParams: URLSearchParams): FilterKeys => {
  const decodedParams: Record<string, any> = {};

  [...searchParams.entries()].forEach(([key, val]) => {
    const match = key.match(duplicateKeyRegex);
    if (match) {
      const [, baseKey, index] = match;
      if (!decodedParams[baseKey]) {
        decodedParams[baseKey] = [];
      }
      decodedParams[baseKey][parseInt(index)] = Number(val);
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
