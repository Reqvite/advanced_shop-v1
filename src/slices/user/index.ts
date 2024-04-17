import {currentUser, login, refreshToken, register} from './actions.js';
import {selectAuthShowModal} from './selectors.js';
import {actions, reducer} from './user.slice.js';

const allActions = {
  ...actions,
  login,
  register,
  currentUser,
  refreshToken
};

export {allActions as actions, reducer, selectAuthShowModal};
