import {BarProps} from '../../types';

export const getAxis = ({
  options,
  legend
}: {options?: BarProps['axisBottom']; legend?: string} = {}): BarProps['axisBottom'] => {
  if (!options) return null;

  return {
    ...options,
    legend: legend ?? options?.legend
  };
};
