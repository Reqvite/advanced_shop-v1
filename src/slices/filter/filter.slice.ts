import {createSlice} from '@reduxjs/toolkit';
import {FilterKeys} from '@/shared/types/filter';

type State = {
  keys: FilterKeys;
};

const initialState: State = {
  keys: {}
};

const {reducer, actions, name} = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter(state, action) {
      state.keys = action.payload;
    },
    resetFilter(state) {
      state.keys = {};
    },
    removeKeys(state, action) {
      const keysToRemove = action.payload;
      for (const key of keysToRemove) {
        delete state.keys[key];
      }
    }
  }
});

export {actions, name, reducer};
