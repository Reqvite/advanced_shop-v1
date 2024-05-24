import {createSlice} from '@reduxjs/toolkit';
import {defaultPage, defaultPrice, defaultRating, defaultSort} from '@/shared/const/product.const';
import {deleteQueryParamsKey, resetQueryParams, updateQueryParams} from '@/shared/lib/helpers';

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
  showMoreInitialPage: null
};

const {reducer, actions, name} = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter(state, action) {
      state.filters = {...state.filters, ...action.payload.filters};
      updateQueryParams({...state.filters, ...action.payload.filters});
    },
    setWishlistParams(state, action) {
      state.filters = {...state.filters, ...action.payload.filters};
      updateQueryParams(action.payload.filters);
    },
    setSearchInput(state, action) {
      const {filters} = action.payload;
      const {category, search} = filters;
      state.filters = {
        ...initialFilter,
        category,
        search
      };
      updateQueryParams(filters);
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
