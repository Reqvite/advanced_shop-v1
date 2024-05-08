import {SortByEnum} from '@/shared/enums/sortBy.enum';

type Option = {
  value: SortByEnum;
  option: {
    orderBy: string;
    order: 1 | -1;
  };
};

export const sortOptionResolver: Option[] = [
  {
    value: SortByEnum.PRICE_LOW_TO_HIGH,
    option: {orderBy: 'price', order: 1}
  },
  {
    value: SortByEnum.PRICE_HIGH_TO_LOW,
    option: {orderBy: 'price', order: -1}
  },
  {
    value: SortByEnum.RATING_LOW_TO_HIGH,
    option: {orderBy: 'rating', order: 1}
  },
  {
    value: SortByEnum.RATING_HIGH_TO_LOW,
    option: {orderBy: 'rating', order: -1}
  }
];

export const getSortOption = (sortValue: number): Option | null => {
  return sortOptionResolver.filter(({value}) => value === Number(sortValue))?.[0] || null;
};
