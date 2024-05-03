import {SortByEnum} from '@/shared/enums/sortBy.enum';

export const sortOptionResolver = [
  {
    value: SortByEnum.PRICE_LOW_TO_HIGH,
    label: 'Price - Low to High',
    option: {orderBy: 'price', order: 1}
  },
  {
    value: SortByEnum.PRICE_HIGH_TO_LOW,
    label: 'Price - High to Low',
    option: {orderBy: 'price', order: -1}
  },
  {
    value: SortByEnum.RATING_LOW_TO_HIGH,
    label: 'Rating - Low to High',
    option: {orderBy: 'rating', order: 1}
  },
  {
    value: SortByEnum.RATING_HIGH_TO_LOW,
    label: 'Rating - High to Low',
    option: {orderBy: 'rating', order: -1}
  }
];

export const getSortOption = (sortValue: number) => {
  return sortOptionResolver.filter(({value}) => value === Number(sortValue))?.[0] || null;
};
