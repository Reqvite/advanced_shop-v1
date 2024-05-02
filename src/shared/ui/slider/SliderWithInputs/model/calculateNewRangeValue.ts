import {Value} from './types';

export const calculateNewRangeValue = ({
  value,
  isMin,
  min,
  max,
  rangeValue
}: {
  value: number;
  isMin: boolean;
  min: number;
  max: number;
  rangeValue: [number, number];
}): Value => {
  const minValue = Math.min(Math.max(value, min), max);
  const maxValue = Math.min(Math.max(value, min), max);

  return isMin ? [minValue, rangeValue[1]] : [rangeValue[0], maxValue];
};
