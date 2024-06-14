import {createSlice, isAnyOf, PayloadAction} from '@reduxjs/toolkit';
import {UserRole} from '@/shared/enums/roles.enum';
import {CartItem} from '@/shared/types/cart';
import {User, UserWishlistType} from '@/shared/types/user/user';
import {currentUser, login, logout, refreshToken, register} from './actions';

type State = {
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
  roles?: UserRole[];
  isLoading: boolean;
};

const initialState: State = {
  user: null,
  accessToken: null,
  refreshToken: null,
  roles: undefined,
  isLoading: false
};

const {reducer, actions, name} = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },
    setWishlist(state, action: PayloadAction<UserWishlistType>) {
      if (state.user) {
        state.user = {...state.user, wishlist: action.payload};
      }
    },
    setCart(state, action: PayloadAction<CartItem[]>) {
      if (state.user) {
        state.user = {...state.user, cart: action.payload};
      }
    },
    clearCart(state) {
      if (state.user) {
        state.user = {...state.user, cart: []};
      }
    },
    clearCurrentUser(state) {
      state.user = null;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(login.fulfilled, (state, action) => {
        const {data, decodedToken} = action.payload;
        state.user = data.user;
        state.accessToken = data.tokens.accessToken;
        state.refreshToken = data.tokens.refreshToken;
        state.roles = decodedToken?.roles;
      })
      .addCase(currentUser.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(refreshToken.fulfilled, (state, action) => {
        const {data, decodedToken} = action.payload;
        console.log(action.payload);
        state.accessToken = data.accessToken;
        state.refreshToken = data.refreshToken;
        state.roles = decodedToken?.roles;
      })
      .addMatcher(
        isAnyOf(login.pending, register.pending, currentUser.pending, logout.pending),
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(login.rejected, register.fulfilled, currentUser.fulfilled, logout.fulfilled),
        (state) => {
          state.isLoading = false;
        }
      )
      .addMatcher(
        isAnyOf(
          login.rejected,
          register.rejected,
          currentUser.rejected,
          refreshToken.rejected,
          logout.fulfilled
        ),
        (state) => {
          state.user = null;
          state.accessToken = null;
          state.refreshToken = null;
          state.isLoading = false;
          state.roles = undefined;
        }
      );
  }
});

export {actions, name, reducer};
