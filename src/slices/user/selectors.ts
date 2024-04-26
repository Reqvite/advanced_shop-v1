import {Store} from '@/app/providers/StoreProvider/config/types';

export const selectAuthUser = (state: Store) => state.user.user;
export const selectAuthAccessToken = (state: Store) => state.user.accessToken;
export const selectAuthIsLoading = (state: Store) => state.user.isLoading;
