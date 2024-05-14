import {
  type configureStore,
  type ThunkMiddleware,
  type Tuple,
  type UnknownAction
} from '@reduxjs/toolkit';
import {PersistPartial} from 'redux-persist/es/persistReducer';
import {$protectedApi, $publicApi, $refreshApi} from '@/shared/api';
import {reducer as filterReducer} from '@/slices/filter';
import {reducer as modalReducer} from '@/slices/modal';
import {productsApi} from '@/slices/products';
import {reducer as themeReducer} from '@/slices/theme';
import {reducer as userReducer} from '@/slices/user';
import {store} from './store';

type RootReducer = {
  theme: ReturnType<typeof themeReducer> & PersistPartial;
  user: ReturnType<typeof userReducer> & PersistPartial;
  modal: ReturnType<typeof modalReducer>;
  filter: ReturnType<typeof filterReducer> & PersistPartial;

  [productsApi.reducerPath]: ReturnType<typeof productsApi.reducer>;
};

type ExtraArguments = {
  $protectedApi: typeof $protectedApi;
  $refreshApi: typeof $refreshApi;
  $publicApi: typeof $publicApi;
};

type AsyncThunkConfig = {
  state: ReturnType<typeof store.instance.getState>;
  dispatch: typeof store.instance.dispatch;
  extra: typeof store.extraArguments;
};

type StoreInstance = ReturnType<
  typeof configureStore<
    RootReducer,
    UnknownAction,
    Tuple<[ThunkMiddleware<RootReducer, UnknownAction, ExtraArguments>]>
  >
>;

type StorePackage = {
  extraArguments: ExtraArguments;
};

type StoreSchema = typeof store.instance.getState;
type StoreInstanceDispatch = typeof store.instance.dispatch;

type Store = ReturnType<typeof store.instance.getState>;

export {
  type AsyncThunkConfig,
  type ExtraArguments,
  type RootReducer,
  type Store,
  type StoreInstance,
  type StoreInstanceDispatch,
  type StorePackage,
  type StoreSchema
};
