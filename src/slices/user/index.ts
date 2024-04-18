import {currentUser, login, logout, refreshToken, register} from './actions.js';
import {
  selectAuthAccessToken,
  selectAuthIsLoading,
  selectAuthShowModal,
  selectAuthUser
} from './selectors.js';
import {actions, reducer} from './user.slice.js';

const allActions = {
  ...actions,
  login,
  register,
  currentUser,
  refreshToken,
  logout
};

export {
  allActions as actions,
  reducer,
  selectAuthAccessToken,
  selectAuthIsLoading,
  selectAuthShowModal,
  selectAuthUser
};
