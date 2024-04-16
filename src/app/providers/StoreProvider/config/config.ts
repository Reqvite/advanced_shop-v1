import {configureStore, ReducersMapObject} from '@reduxjs/toolkit';
import {FLUSH, PAUSE, PERSIST, persistReducer, PURGE, REGISTER, REHYDRATE} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {$api, $apiRefresh} from '@/shared/api';
import {reducer as themeReducer} from '@/slices/theme';
import {reducer as userReducer} from '@/slices/user';
import {ExtraArguments, RootReducer, StoreInstance, StorePackage} from './types';

const themePersistConfig = {
  key: 'theme',
  storage,
  blacklist: []
};

const userPersistConfig = {
  key: 'user',
  storage,
  blacklist: []
};

class Store implements StorePackage {
  #instance: StoreInstance;

  public get instance(): StoreInstance {
    return this.#instance;
  }

  public constructor() {
    const rootReducer: ReducersMapObject<RootReducer> = {
      theme: persistReducer(themePersistConfig, themeReducer),
      user: persistReducer(userPersistConfig, userReducer)
    };
    this.#instance = configureStore({
      reducer: rootReducer,
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
          },
          thunk: {
            extraArgument: this.extraArguments
          }
        })
    });
  }

  public get extraArguments(): ExtraArguments {
    return {
      $api,
      $apiRefresh
    };
  }
}

export {Store};
