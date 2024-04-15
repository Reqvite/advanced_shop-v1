import {configureStore, ReducersMapObject} from '@reduxjs/toolkit';
import {FLUSH, PAUSE, PERSIST, persistReducer, PURGE, REGISTER, REHYDRATE} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {reducer as themeReducer} from '@/slices/theme';
import {ExtraArguments, RootReducer, StoreInstance, StorePackage} from './types';

const themePersistConfig = {
  key: 'theme',
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
      theme: persistReducer(themePersistConfig, themeReducer)
    };
    this.#instance = configureStore({
      reducer: rootReducer,
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
          }
        })
    });
  }

  public get extraArguments(): ExtraArguments {
    return {};
  }
}

export {Store};
