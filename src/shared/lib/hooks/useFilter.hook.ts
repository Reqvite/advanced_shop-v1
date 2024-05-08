import {useEffect} from 'react';
import {useSearchParams} from 'react-router-dom';
import {FilterKeys} from '@/shared/types/filter';
import {actions as filterActions, selectFilter} from '@/slices/filter';
import {decodeSearchParams, encodeSearchParams} from '../helpers';
import {useAppDispatch} from './useAppDispatch.hook';
import {useAppSelector} from './useAppSelector.hook';

interface UseFilterReturn<T> {
  searchParams: URLSearchParams;
  filterKeys: FilterKeys;
  onUpdateFilter: ({data, resetPage}: {data: Record<string, unknown>; resetPage?: boolean}) => void;
  onResetFilter: (resetValues: T) => void;
  decodeParams: T;
}

export const useFilter = <T>(): UseFilterReturn<T> => {
  const dispatch = useAppDispatch();
  const filterKeys = useAppSelector(selectFilter);
  const [searchParams, setSearchParams] = useSearchParams();
  const decodeParams = decodeSearchParams(searchParams) as T;

  useEffect(() => {
    if (searchParams.size === 0) {
      dispatch(filterActions.resetFilter());
    }
  }, [dispatch, searchParams]);

  const onUpdateFilter = ({data, resetPage}: {data: object; resetPage?: boolean}): void => {
    setSearchParams(encodeSearchParams({...filterKeys, ...data, ...(resetPage ? {page: 1} : {})}));
    dispatch(filterActions.setFilter({...filterKeys, ...data, ...(resetPage ? {page: 1} : {})}));
  };

  const onResetFilter = (resetValues: T): void => {
    const resetParams = encodeSearchParams(resetValues as any);
    for (const key of resetParams.keys()) {
      searchParams.delete(key);
    }

    setSearchParams(searchParams);
    const copy = {...filterKeys};
    for (const key in resetValues) {
      if (Object.prototype.hasOwnProperty.call(resetValues, key)) {
        delete copy[key];
      }
    }
    dispatch(filterActions.setFilter(copy));
  };

  return {searchParams, filterKeys, decodeParams, onUpdateFilter, onResetFilter};
};
