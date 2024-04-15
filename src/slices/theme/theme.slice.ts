import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  darkMode: false
};

const {reducer, actions, name} = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode;
    }
  }
});

export {actions, name, reducer};
