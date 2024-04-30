import {Store} from '@/app/providers/StoreProvider/config/types';

export const selectShowModal = (state: Store) => state.modal.showModal;
export const selectModalContent = (state: Store) => state.modal.content;
