import storage from 'redux-persist/lib/storage';

const themePersistConfig = {
  key: 'theme',
  storage,
  blacklist: []
};

const userPersistConfig = {
  key: 'user',
  storage,
  blacklist: ['isLoading']
};

const filterPersistConfig = {
  key: 'filter',
  storage,
  blacklist: ['showMore', 'showMoreInitialPage']
};

export {filterPersistConfig, themePersistConfig, userPersistConfig};
