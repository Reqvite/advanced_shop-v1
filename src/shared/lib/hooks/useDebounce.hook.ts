import {useEffect, useRef} from 'react';

type Callback<T extends any[]> = (...args: T) => void;

export const useDebounce = <T extends any[]>(callback: Callback<T>, delay: number): Callback<T> => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const debouncedCallback: Callback<T> = (...args: T) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      callback(...args);
    }, delay);
  };

  return debouncedCallback;
};
