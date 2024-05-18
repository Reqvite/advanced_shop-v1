import {useEffect} from 'react';
import {useSearchParams} from 'react-router-dom';
import {defaultPage} from '@/shared/const/product.const';
import {FilterKeys} from '@/shared/types/filter';
import {
  actions as filterActions,
  selectFilter,
  selectResetAll,
  selectShowMore,
  selectShowMoreInitialPage
} from '@/slices/filter';
import {decodeSearchParams, encodeSearchParams} from '../helpers';
import {useAppDispatch} from './useAppDispatch.hook';
import {useAppSelector} from './useAppSelector.hook';

interface UseFilterReturn<T> {
  searchParams: URLSearchParams;
  requestParams: FilterKeys;
  resetAll: boolean;
  showMoreInitialPage: number | null;
  onUpdateFilter: ({data, resetPage}: {data: Record<string, unknown>; resetPage?: boolean}) => void;
  onResetFilter: (resetValues: Record<string, unknown>) => void;
  onShowMore: () => void;
  decodeParams: T;
}

interface UpdateFilterArgs {
  data: Record<string, unknown>;
  resetPage?: boolean;
  resetOtherFilterKeys?: boolean;
}

export const useFilter = <T>(): UseFilterReturn<T> => {
  const dispatch = useAppDispatch();
  const resetAll = useAppSelector(selectResetAll);
  const filterKeys = useAppSelector(selectFilter);
  const showMore = useAppSelector(selectShowMore);
  const currentPage = Number(filterKeys.page || defaultPage);
  const showMoreInitialPage = useAppSelector(selectShowMoreInitialPage) || currentPage;
  const [searchParams, setSearchParams] = useSearchParams();
  const decodeParams = decodeSearchParams(searchParams) as T;
  const requestParams = {...decodeParams, showMore};

  const onUpdateFilter = ({data, resetPage, resetOtherFilterKeys}: UpdateFilterArgs): void => {
    const flattenedData = Object.entries(data).reduce((acc, [key, value]) => {
      if (typeof value === 'object' && !Array.isArray(value) && value !== null) {
        return {...acc, ...value};
      }
      return {...acc, [key]: value};
    }, {});

    const newData = resetPage ? {...flattenedData, page: 1} : flattenedData;
    const updatedFilter = {...filterKeys, ...newData};

    dispatch(filterActions.setFilter(updatedFilter));
    dispatch(filterActions.disableShowMore());

    if (resetOtherFilterKeys) {
      dispatch(filterActions.resetFilterOn());
    }
  };

  const onShowMore = (): void => {
    dispatch(filterActions.setFilter({...filterKeys, page: currentPage + 1}));
    dispatch(filterActions.enableShowMore(currentPage));
  };

  const onResetFilter = (resetValues: Record<string, unknown>): void => {
    resetValues.page = 1;
    dispatch(filterActions.disableShowMore());
    dispatch(filterActions.removeKeys(Object.keys(resetValues)));
  };

  useEffect(() => {
    if (resetAll) {
      dispatch(filterActions.resetFilterOff());
    }
  }, [dispatch, resetAll]);

  useEffect(() => {
    setSearchParams(encodeSearchParams(filterKeys));
  }, [filterKeys, setSearchParams]);

  return {
    searchParams,
    requestParams,
    decodeParams,
    onUpdateFilter,
    onResetFilter,
    onShowMore,
    showMoreInitialPage,
    resetAll
  };
};
