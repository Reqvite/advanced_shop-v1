import {useEffect} from 'react';
import {useSearchParams} from 'react-router-dom';
import {actions, selectFilter} from '@/slices/filter';
import {decodeSearchParams} from '../helpers';
import {useAppDispatch} from './useAppDispatch.hook';
import {useAppSelector} from './useAppSelector.hook';

export const useFilter = () => {
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
