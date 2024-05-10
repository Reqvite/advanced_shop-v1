import {useEffect} from 'react';
import {useSearchParams} from 'react-router-dom';
import {defaultPage} from '@/shared/const/product.const';
import {FilterKeys} from '@/shared/types/filter';
import {
  actions as filterActions,
  selectFilter,
  selectShowMore,
  selectShowMoreInitialPage
} from '@/slices/filter';
import {decodeSearchParams, encodeSearchParams} from '../helpers';
import {useAppDispatch} from './useAppDispatch.hook';
import {useAppSelector} from './useAppSelector.hook';

interface UseFilterReturn<T> {
  searchParams: URLSearchParams;
  requestParams: FilterKeys;
  showMoreInitialPage: number | null;
  onUpdateFilter: ({data, resetPage}: {data: Record<string, unknown>; resetPage?: boolean}) => void;
  onResetFilter: (resetValues: Record<string, unknown>) => void;
  onShowMore: () => void;
  decodeParams: T;
  showMore: boolean;
}

export const useFilter = <T>(): UseFilterReturn<T> => {
  const dispatch = useAppDispatch();
  const filterKeys = useAppSelector(selectFilter);
  const showMore = useAppSelector(selectShowMore);
  const currentPage = Number(filterKeys.page || defaultPage);
  const showMoreInitialPage = useAppSelector(selectShowMoreInitialPage) || currentPage;
  const requestParams = {...filterKeys, showMore};
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
    dispatch(filterActions.disableShowMore());
  };

  const onShowMore = (): void => {
    setSearchParams(encodeSearchParams({...filterKeys, page: currentPage + 1}));
    dispatch(filterActions.setFilter({...filterKeys, page: currentPage + 1}));
    dispatch(filterActions.enableShowMore(currentPage));
  };

  const onResetFilter = (resetValues: Record<string, unknown>): void => {
    const resetParams = encodeSearchParams(resetValues);
    for (const key of resetParams.keys()) {
      searchParams.delete(key);
    }

    setSearchParams(searchParams);

    const copy = {...filterKeys};
    for (const key of Object.keys(resetValues)) {
      delete copy[key];
    }

    dispatch(filterActions.setFilter(copy));
  };

  return {
    searchParams,
    requestParams,
    decodeParams,
    onUpdateFilter,
    onResetFilter,
    onShowMore,
    showMoreInitialPage,
    showMore
  };
};
