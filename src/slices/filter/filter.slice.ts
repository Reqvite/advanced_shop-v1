import {createSlice} from '@reduxjs/toolkit';
import {FilterKeys} from '@/shared/types/filter';

type State = {
  filters: FilterKeys;
  showMore: boolean;
  showMoreInitialPage: number | null;
  resetAll: boolean;
};

const initialState: State = {
  filters: {},
  showMore: false,
  showMoreInitialPage: null,
  resetAll: false
};

const {reducer, actions, name} = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter(state, action) {
      state.filters = action.payload;
    },
    resetFilterOn(state) {
      state.resetAll = true;
    },
    resetFilterOff(state) {
      state.resetAll = false;
    },
    resetFilter(state) {
      state.filters = {};
      state.showMore = false;
      state.showMoreInitialPage = null;
    },
    enableShowMore(state, action) {
      state.showMore = true;
      state.showMoreInitialPage ||= action.payload;
    },
    disableShowMore(state) {
      state.showMore = false;
      state.showMoreInitialPage = null;
    },
    removeKeys(state, action) {
      const keysToRemove = action.payload;
      for (const key of keysToRemove) {
        delete state.filters[key];
      }
    }
  }
});

export {actions, name, reducer};
