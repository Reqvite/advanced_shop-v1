import {store} from '@/app/providers/StoreProvider/config/store';

export const selectAuthUser = (state: ReturnType<typeof store.instance.getState>) =>
  state.user.user;
export const selectAuthAccessToken = (state: ReturnType<typeof store.instance.getState>) =>
  state.user.accessToken;
export const selectAuthShowModal = (state: ReturnType<typeof store.instance.getState>) =>
  state.user.showModal;
export const selectAuthIsLoading = (state: ReturnType<typeof store.instance.getState>) =>
  state.user.isLoading;
