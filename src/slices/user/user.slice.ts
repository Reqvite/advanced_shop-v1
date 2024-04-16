import {createAsyncThunk, createSlice, isAnyOf} from '@reduxjs/toolkit';
import {$apiRefresh} from '@/shared/api';
import {User} from '@/shared/types/user/user';
import {currentUser, login, refreshToken, register} from './actions';

// Async thunk for refreshing tokens
export const refreshTokens = createAsyncThunk('auth/refreshTokens', async () => {
  const response = await $apiRefresh.post(`/users/refresh`);
  return response.data;
});

type State = {
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
};

const initialState: State = {
  user: null,
  accessToken: null,
  refreshToken: null
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
    }
  },
  extraReducers(builder) {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
      })
      .addCase(currentUser.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(refreshToken.fulfilled, (state, action) => {
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
      })
      .addMatcher(isAnyOf(login.rejected, register.rejected, currentUser.rejected), (state) => {
        state.user = null;
        state.accessToken = null;
        state.refreshToken = null;
      });
  }
});

export {actions, name, reducer};
