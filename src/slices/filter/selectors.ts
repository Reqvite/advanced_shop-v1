import {Store} from '@/app/providers/StoreProvider/config/types';

export const selectFilter = (state: Store) => state.filter.data;

// export const selectFilter = createSelector(selectFilterData, (filterData) =>
//   encodeSearchParams(filterData)
// );
