import {configureStore, ReducersMapObject} from '@reduxjs/toolkit';
import {FLUSH, PAUSE, PERSIST, persistReducer, PURGE, REGISTER, REHYDRATE} from 'redux-persist';
import {$protectedApi, $publicApi, $refreshApi} from '@/shared/api';
import {productsApi} from '@/slices/products';
import {reducer as themeReducer} from '@/slices/theme';
import {reducer as userReducer} from '@/slices/user';
import {themePersistConfig, userPersistConfig} from './pesrsistConfig';
import {ExtraArguments, RootReducer, StoreInstance, StorePackage} from './types';

class Store implements StorePackage {
  #instance: StoreInstance;

  public get instance(): StoreInstance {
    return this.#instance;
  }

  public constructor() {
    const rootReducer: ReducersMapObject<RootReducer> = {
      theme: persistReducer(themePersistConfig, themeReducer),
      user: persistReducer(userPersistConfig, userReducer),
      [productsApi.reducerPath]: productsApi.reducer
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
        }).concat(productsApi.middleware)
    });
  }

  public get extraArguments(): ExtraArguments {
    return {
      $protectedApi,
      $refreshApi,
      $publicApi
    };
  }
}

export {Store};
