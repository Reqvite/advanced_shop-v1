import {store} from '@/app/providers/StoreProvider/config/store';

export const selectAuthShowModal = (state: ReturnType<typeof store.instance.getState>) =>
  state.user.showModal;
