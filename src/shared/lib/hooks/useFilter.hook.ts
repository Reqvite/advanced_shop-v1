import {useLocation} from 'react-router-dom';
import {getRouteWishlist} from '@/app/providers/AppRouter/routeConfig';
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

export const useFilter = (): UseFilterReturn => {
  const dispatch = useAppDispatch();
  const {pathname} = useLocation();
  const filterKeys = useAppSelector(selectFilter);
  const currentPage = Number(filterKeys.page);
  const showMore = useAppSelector(selectShowMore);
  const queryParams = new URLSearchParams(window.location.search);
  const decodeParams = decodeSearchParams(queryParams);
  const showMoreInitialPage = useAppSelector(selectShowMoreInitialPage) || currentPage;
  const isWishlistPage = pathname === getRouteWishlist();
  const params = {...decodeParams, showMore} as RequestFilterParams;
  const paramsWithoutShowMore = {...decodeParams} as RequestFilterParams;
  const paramsLength = Object.keys(decodeParams).length;

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
    dispatch(filterActions.setFilter({filters: newFilters, isWishlistPage}));
    dispatch(filterActions.disableShowMore());
  };

  const onShowMore = (): void => {
    dispatch(filterActions.setFilter({filters: {page: currentPage + 1}, isWishlistPage}));
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
