import {FilterI} from '@/slices/filter/filter.slice';

export interface RequestFilterParams extends FilterI {
  showMore: boolean;
}
