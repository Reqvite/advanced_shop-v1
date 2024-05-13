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
  onResetFilter: (resetValues: Record<string, unknown>) => void;
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
    const newData = resetPage ? {...data, page: 1} : data;
    const updatedFilter = {...filterKeys, ...newData};

    setSearchParams(encodeSearchParams(updatedFilter));
    dispatch(filterActions.setFilter(updatedFilter));
  };

  const onResetFilter = (resetValues: Record<string, unknown>): void => {
    const resetParams = encodeSearchParams(resetValues);
    for (const key of resetParams.keys()) {
      searchParams.delete(key);
    }

    setSearchParams(searchParams);
    dispatch(filterActions.removeKeys(Object.keys(resetValues)));
  };

  return {searchParams, filterKeys, decodeParams, onUpdateFilter, onResetFilter};
};
