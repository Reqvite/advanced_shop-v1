import {configureStore, ReducersMapObject} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import {$protectedApi, $publicApi, $refreshApi} from '@/shared/api';
import {notificationService} from '@/shared/services';
import {cartApi} from '@/slices/cart/cart.rtk';
import {dashboardApi} from '@/slices/dashboard/dashboard.rtk';
import {reducer as filterReducer} from '@/slices/filter';
import {locationApi} from '@/slices/location';
import {reducer as modalReducer} from '@/slices/modal';
import {productsApi} from '@/slices/products/products.rtk';
import {reviewsApi} from '@/slices/reviews/reviews.rtk';
import {reducer as themeReducer} from '@/slices/theme';
import {reducer as userReducer} from '@/slices/user';
import {filterPersistConfig, themePersistConfig, userPersistConfig} from './pesrsistConfig';
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
      filter: persistReducer(filterPersistConfig, filterReducer),
      modal: modalReducer,
      [productsApi.reducerPath]: productsApi.reducer,
      [cartApi.reducerPath]: cartApi.reducer,
      [reviewsApi.reducerPath]: reviewsApi.reducer,
      [locationApi.reducerPath]: locationApi.reducer,
      [dashboardApi.reducerPath]: dashboardApi.reducer
    };
    this.#instance = configureStore({
      reducer: rootReducer,
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: false,
          thunk: {
            extraArgument: this.extraArguments
          }
        })
          .concat(productsApi.middleware)
          .concat(cartApi.middleware)
          .concat(locationApi.middleware)
          .concat(reviewsApi.middleware)
          .concat(dashboardApi.middleware)
    });
  }

  public get extraArguments(): ExtraArguments {
    return {
      $protectedApi,
      $refreshApi,
      $publicApi,
      notificationService
    };
  }
}

export {Store};
