import {DialogProps} from '@mui/material';
import {createSlice} from '@reduxjs/toolkit';
import {ReactNode} from 'react';

type State = {
  showModal: boolean;
  content: {
    children: ReactNode;
    props?: {
      maxWidth: DialogProps['maxWidth'];
    };
  } | null;
};

const initialState: State = {
  showModal: false,
  content: null
};

const {reducer, actions, name} = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal(state, action) {
      state.showModal = true;
      state.content = action.payload;
    },
    closeModal(state) {
      state.showModal = false;
    }
  }
});

export {actions, name, reducer};
