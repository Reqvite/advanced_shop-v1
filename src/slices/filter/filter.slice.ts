import {createSlice} from '@reduxjs/toolkit';
import {defaultPage, defaultPrice, defaultRating, defaultSort} from '@/shared/const/product.const';
import {encodeSearchParams} from '@/shared/lib/helpers';

export interface FilterI {
  page: number;
  rating: number[];
  categories: number[];
  category: number;
  search: string;
  prices: number[];
  brands: number[];
  sort: number;
}

type State = {
  filters: FilterI;
  showMore: boolean;
  showMoreInitialPage: number | null;
  resetAll: boolean;
};

export const initialFilter = {
  page: defaultPage,
  rating: defaultRating,
  categories: [],
  category: 0,
  search: '',
  prices: defaultPrice,
  brands: [],
  sort: defaultSort
};

const initialState: State = {
  filters: initialFilter,
  showMore: false,
  showMoreInitialPage: null,
  resetAll: false
};

const updateQueryParams = (filters: Partial<FilterI>) => {
  const queryParams = new URLSearchParams(encodeSearchParams(filters));
  window.history.replaceState({}, '', `${window.location.pathname}?${queryParams}`);
};

const resetQueryParams = () => {
  const queryParams = new URLSearchParams();
  window.history.replaceState({}, '', `${window.location.pathname}?${queryParams}`);
};

const deleteQueryParamsKey = (key: string) => {
  const queryParams = new URLSearchParams(window.location.search);
  queryParams.delete(key);
  const newUrl = `${window.location.pathname}?${queryParams.toString()}`;
  window.history.replaceState({}, '', newUrl);
};

const {reducer, actions, name} = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter(state, action) {
      const {filters, isWishlistPage} = action.payload;
      const {category, search} = filters;
      if (category) {
        state.filters = {
          ...initialFilter,
          category,
          search
        };
        updateQueryParams(action.payload.filters);
        return;
      }

      state.filters = {...state.filters, ...action.payload.filters};
      if (isWishlistPage) {
        updateQueryParams(action.payload.filters);
      } else {
        updateQueryParams({...state.filters, ...action.payload.filters});
      }
    },
    resetFilter(state) {
      state.filters = initialFilter;
      state.showMore = false;
      state.showMoreInitialPage = null;
      resetQueryParams();
    },
    enableShowMore(state, action) {
      state.showMore = true;
      state.showMoreInitialPage ||= action.payload;
    },
    disableShowMore(state) {
      state.showMore = false;
      state.showMoreInitialPage = null;
    },
    resetCategory(state) {
      state.filters = {...state.filters, category: 0};
      deleteQueryParamsKey('category');
    }
  }
});

export {actions, name, reducer};
