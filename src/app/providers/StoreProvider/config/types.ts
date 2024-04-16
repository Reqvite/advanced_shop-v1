import {
  type configureStore,
  type ThunkMiddleware,
  type Tuple,
  type UnknownAction
} from '@reduxjs/toolkit';
import {PersistPartial} from 'redux-persist/es/persistReducer';
import {reducer as themeReducer} from '@/slices/theme';
import {store} from './store';

type RootReducer = {
  theme: ReturnType<typeof themeReducer> & PersistPartial;
};

type ExtraArguments = {
  key: string;
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

export {
  type ExtraArguments,
  type RootReducer,
  type StoreInstance,
  type StoreInstanceDispatch,
  type StorePackage,
  type StoreSchema
};
