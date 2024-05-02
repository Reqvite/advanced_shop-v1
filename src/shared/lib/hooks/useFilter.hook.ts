import {useEffect} from 'react';
import {useSearchParams} from 'react-router-dom';
import {FilterKeys} from '@/shared/types/filter';
import {actions, selectFilter} from '@/slices/filter';
import {decodeSearchParams} from '../helpers';
import {useAppDispatch} from './useAppDispatch.hook';
import {useAppSelector} from './useAppSelector.hook';

interface UseFilterReturn {
  searchParams: URLSearchParams;
  filterKeys: FilterKeys;
  decodeParams: FilterKeys;
}

export const useFilter = (): UseFilterReturn => {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const filterKeys = useAppSelector(selectFilter);
  const decodeParams = decodeSearchParams(searchParams);

  useEffect(() => {
    if (searchParams.size === 0) {
      dispatch(actions.resetFilter());
    }
  }, []);

  return {searchParams, filterKeys, decodeParams};
};
