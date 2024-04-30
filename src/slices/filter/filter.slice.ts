import {createSlice} from '@reduxjs/toolkit';

type State = {
  keys: {[key: string]: string | number | number[] | string[]};
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
