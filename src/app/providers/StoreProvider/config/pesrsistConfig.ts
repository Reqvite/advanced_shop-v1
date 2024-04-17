import storage from 'redux-persist/lib/storage';

const themePersistConfig = {
  key: 'theme',
  storage,
  blacklist: []
};

const userPersistConfig = {
  key: 'user',
  storage,
  blacklist: ['showModal']
};

export {themePersistConfig, userPersistConfig};
