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
    }
  }
});

export {actions, name, reducer};
