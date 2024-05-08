import {useEffect} from 'react';
import {useSearchParams} from 'react-router-dom';
import {FilterKeys} from '@/shared/types/filter';
import {actions as filterActions, selectFilter} from '@/slices/filter';
import {decodeSearchParams, encodeSearchParams} from '../helpers';
import {useAppDispatch} from './useAppDispatch.hook';
import {useAppSelector} from './useAppSelector.hook';

interface UseFilterReturn {
  searchParams: URLSearchParams;
  filterKeys: FilterKeys;
  decodeParams: FilterKeys;
  onUpdateFilter: ({data, resetPage}: {data: Record<string, unknown>; resetPage?: boolean}) => void;
  onResetFilter: () => void;
}

export const useFilter = (): UseFilterReturn => {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const filterKeys = useAppSelector(selectFilter);
  const decodeParams = decodeSearchParams(searchParams);
  const [, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.size === 0) {
      dispatch(filterActions.resetFilter());
    }
  }, []);

  const onUpdateFilter = ({data, resetPage}: {data: object; resetPage?: boolean}): void => {
    setSearchParams(encodeSearchParams({...filterKeys, ...data, ...(resetPage ? {page: 1} : {})}));
    dispatch(filterActions.setFilter({...filterKeys, ...data, ...(resetPage ? {page: 1} : {})}));
  };

  const onResetFilter = (): void => {
    setSearchParams();
    filterActions.resetFilter();
  };

  return {searchParams, filterKeys, decodeParams, onUpdateFilter, onResetFilter};
};
