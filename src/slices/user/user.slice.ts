import {createSlice, isAnyOf} from '@reduxjs/toolkit';
import {User} from '@/shared/types/user/user';
import {currentUser, login, refreshToken, register} from './actions';

type State = {
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
  showModal: boolean;
};

const initialState: State = {
  user: null,
  accessToken: null,
  refreshToken: null,
  showModal: false
};

const {reducer, actions, name} = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUser(state, action) {
      state.user = action.payload;
    },
    clearCurrentUser(state) {
      state.user = null;
    },
    openModal(state) {
      state.showModal = true;
    },
    closeModal(state) {
      state.showModal = false;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.accessToken = action.payload.tokens.accessToken;
        state.refreshToken = action.payload.tokens.refreshToken;
      })
      .addCase(currentUser.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(refreshToken.fulfilled, (state, action) => {
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
      })
      .addMatcher(
        isAnyOf(login.rejected, register.rejected, currentUser.rejected, refreshToken.rejected),
        (state) => {
          state.user = null;
          state.accessToken = null;
          state.refreshToken = null;
        }
      );
  }
});

export {actions, name, reducer};
