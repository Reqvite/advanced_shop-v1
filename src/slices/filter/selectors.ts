import {Store} from '@/app/providers/StoreProvider/config/types';

export const selectFilter = (state: Store) => state.filter.keys;
export const selectShowMore = (state: Store) => state.filter.showMore;
export const selectShowMoreInitialPage = (state: Store) => state.filter.showMoreInitialPage;
