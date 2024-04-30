import {createSlice} from '@reduxjs/toolkit';

type State = {
  data: {[key: string]: string | number | number[] | string[]};
};

const initialState: State = {
  data: {}
};

const {reducer, actions, name} = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter(state, action) {
      state.data = action.payload;
    }
  }
});

export {actions, name, reducer};
