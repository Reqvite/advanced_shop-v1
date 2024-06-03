import {ActionCreatorWithPayload} from '@reduxjs/toolkit';
import {useLocation} from 'react-router-dom';
import {getRouteOrders, getRouteWishlist} from '@/app/providers/AppRouter/routeConfig';
import {RequestFilterParams} from '@/shared/types/filter';
import {
  actions as filterActions,
  selectFilter,
  selectShowMore,
  selectShowMoreInitialPage
} from '@/slices/filter';
import {FilterI} from '@/slices/filter/filter.slice';
import {decodeSearchParams} from '../helpers';
import {useAppDispatch} from './useAppDispatch.hook';
import {useAppSelector} from './useAppSelector.hook';

export interface OnUpdateOptions {
  resetPage?: boolean;
}

interface UseFilterReturn {
  params: RequestFilterParams;
  paramsLength: number;
  paramsWithoutShowMore: Omit<RequestFilterParams, 'showMore'>;
  showMoreInitialPage: number | null;
  onUpdateFilter: (filters: Partial<FilterI>, options?: OnUpdateOptions) => void;
  onResetFilter: () => void;
  onShowMore: () => void;
  onResetCategory: () => void;
}

interface UseFilterArgs {
  filterAction?: ActionCreatorWithPayload<unknown>;
}

export const useFilter = ({filterAction}: UseFilterArgs = {}): UseFilterReturn => {
  const dispatch = useAppDispatch();
  const {pathname} = useLocation();
  const filterKeys = useAppSelector(selectFilter);
  const currentPage = Number(filterKeys.page);
  const showMore = useAppSelector(selectShowMore);
  const queryParams = new URLSearchParams(window.location.search);
  const decodeParams = decodeSearchParams(queryParams);
  const showMoreInitialPage = useAppSelector(selectShowMoreInitialPage) || currentPage;
  const params = {...decodeParams, showMore} as RequestFilterParams;
  const paramsWithoutShowMore = {...decodeParams} as RequestFilterParams;
  const paramsLength = Object.keys(decodeParams).length;
  const isWithPageParams = pathname === getRouteWishlist() || pathname === getRouteOrders();

  const onUpdateFilter = (
    filters: Partial<FilterI>,
    options: OnUpdateOptions = {resetPage: false}
  ): void => {
    const flattenedData = Object.entries(filters).reduce((acc, [key, value]) => {
      if (typeof value === 'object' && !Array.isArray(value) && value !== null) {
        return {...acc, ...(value as object)};
      }
      return {...acc, [key]: value};
    }, {});
    const newFilters = options.resetPage ? {...flattenedData, page: 1} : flattenedData;

    if (filterAction) {
      dispatch(filterAction({filters: newFilters}));
    } else if (isWithPageParams) {
      dispatch(filterActions.setPageParams({filters: newFilters}));
    } else {
      dispatch(filterActions.setFilter({filters: newFilters}));
    }

    dispatch(filterActions.disableShowMore());
  };

  const onShowMore = (): void => {
    if (isWithPageParams) {
      dispatch(filterActions.setPageParams({filters: {page: currentPage + 1}}));
    } else {
      dispatch(filterActions.setFilter({filters: {page: currentPage + 1}}));
    }
    dispatch(filterActions.enableShowMore(currentPage));
  };

  const onResetFilter = (): void => {
    dispatch(filterActions.resetFilter());
  };

  const onResetCategory = (): void => {
    dispatch(filterActions.resetCategory());
  };

  return {
    onUpdateFilter,
    params,
    paramsLength,
    paramsWithoutShowMore,
    showMoreInitialPage,
    onShowMore,
    onResetFilter,
    onResetCategory
  };
};
