import {useEffect, useState} from 'react';
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

interface UpdateFilterArgs {
  data: Record<string, unknown>;
  resetPage?: boolean;
  resetOtherFilterKeys?: boolean;
}

interface OnResetOptions {
  resetPage?: boolean;
}

interface UseFilterReturn<T> {
  searchParams: URLSearchParams;
  requestParams: FilterKeys;
  resetAll: boolean;
  showMoreInitialPage: number | null;
  onUpdateFilter: (args: UpdateFilterArgs) => void;
  onResetFilter: (resetValues: Record<string, unknown>, options?: OnResetOptions) => void;
  onShowMore: () => void;
  decodeParams: T;
  filterKeys: FilterKeys;
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
  const [isFilterKeysChanged, setIsFilterKeysChanged] = useState<boolean>(false);

  const onUpdateFilter = ({data, resetPage, resetOtherFilterKeys}: UpdateFilterArgs): void => {
    const flattenedData = Object.entries(data).reduce((acc, [key, value]) => {
      if (typeof value === 'object' && !Array.isArray(value) && value !== null) {
        return {...acc, ...value};
      }
      return {...acc, [key]: value};
    }, {});

    const newData = resetPage ? {...flattenedData, page: 1} : flattenedData;
    const updatedFilter = resetOtherFilterKeys ? {...newData} : {...filterKeys, ...newData};

    setSearchParams(encodeSearchParams(updatedFilter));
    dispatch(filterActions.setFilter(updatedFilter));
    dispatch(filterActions.disableShowMore());

    if (resetOtherFilterKeys) {
      dispatch(filterActions.resetFilterOn());
    }

    setIsFilterKeysChanged(true);
  };

  const onShowMore = (): void => {
    setSearchParams(encodeSearchParams({...filterKeys, page: currentPage + 1}));
    dispatch(filterActions.setFilter({...filterKeys, page: currentPage + 1}));
    dispatch(filterActions.enableShowMore(currentPage));

    setIsFilterKeysChanged(true);
  };

  const onResetFilter = (
    resetValues: Record<string, unknown>,
    options: OnResetOptions = {resetPage: true}
  ): void => {
    if (options.resetPage) {
      resetValues.page = 1;
    }
    dispatch(filterActions.disableShowMore());
    dispatch(filterActions.removeKeys(Object.keys(resetValues)));

    setIsFilterKeysChanged(true);
  };

  useEffect(() => {
    if (resetAll) {
      dispatch(filterActions.resetFilterOff());
    }
  }, [dispatch, resetAll]);

  useEffect(() => {
    if (isFilterKeysChanged) {
      setSearchParams(encodeSearchParams(filterKeys));
      setIsFilterKeysChanged(false);
    }
  }, [filterKeys, isFilterKeysChanged, setSearchParams]);

  return {
    searchParams,
    requestParams,
    decodeParams,
    onUpdateFilter,
    onResetFilter,
    onShowMore,
    showMoreInitialPage,
    resetAll,
    filterKeys
  };
};
