import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {FilterKeys} from '@/shared/types/filter';

type State = {
  keys: FilterKeys;
  showMore: boolean;
  showMoreInitialPage: number | null;
};

const initialState: State = {
  keys: {},
  showMore: false,
  showMoreInitialPage: null
};

const {reducer, actions, name} = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter(state, action: PayloadAction<FilterKeys>) {
      state.keys = action.payload;
    },
    resetFilter(state) {
      state.keys = {};
    },
    enableShowMore(state, {payload}: PayloadAction<number>) {
      state.showMore = true;
      state.showMoreInitialPage = state.showMoreInitialPage || payload;
    },
    disableShowMore(state) {
      state.showMore = false;
      state.showMoreInitialPage = null;
    }
  }
});

export {actions, name, reducer};
