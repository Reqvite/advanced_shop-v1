import {nanoid} from '@reduxjs/toolkit';
import {LabelOptionsI, LabelOptionsWithId} from '../../../types/options';

export const getCharacteristicsWithQuantity = (
  characteristics: LabelOptionsWithId[],
  quantity: number
): LabelOptionsI[] => [
  {
    label: 'Quantity',
    value: quantity || 'Out of stock',
    _id: nanoid()
  },
  ...characteristics
];
