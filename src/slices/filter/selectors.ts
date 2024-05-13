import {Store} from '@/app/providers/StoreProvider/config/types';

export const selectFilter = (state: Store) => state.filter.filters;
