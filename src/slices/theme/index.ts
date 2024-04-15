import {actions} from './theme.slice.js';

const allActions = {
  ...actions
};

export {allActions as actions};
export {selectTheme} from './selectors.js';
export {reducer} from './theme.slice.js';
