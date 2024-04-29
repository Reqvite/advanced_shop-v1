import {DependencyList, useEffect} from 'react';

export const useDebounceEffect = (
  callback: () => void,
  dependencies: DependencyList,
  delay: number
): void => {
  useEffect(() => {
    const handler = setTimeout(() => {
      callback();
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [...dependencies, delay]);
};
