const duplicateKeyRegex = /^(\w+)(\d+)$/;

export const decodeSearchParams = (searchParams: URLSearchParams) => {
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
      decodedParams[key] = Number(val);
    }
  });

  return decodedParams;
};

export const encodeSearchParams = (params: Record<string, any>) => {
  const searchParams = new URLSearchParams();

  for (const key in params) {
    const value = params[key];
    if (Array.isArray(value)) {
      value.forEach((v, index) => {
        searchParams.append(`${key}${index}`, v);
      });
    } else {
      searchParams.set(key, value);
    }
  }

  return searchParams;
};
