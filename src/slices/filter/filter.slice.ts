import {createSlice} from '@reduxjs/toolkit';
import {FilterKeys} from '@/shared/types/filter';

type State = {
  filters: FilterKeys;
};

const initialState: State = {
  filters: {}
};

const {reducer, actions, name} = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter(state, action) {
      state.filters = action.payload;
    },
    resetFilter(state) {
      state.filters = {};
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
