import {BarProps} from '../../types';

export const getAxis = ({
  options,
  legend
}: {options?: BarProps['axisBottom']; legend?: string} = {}): BarProps['axisBottom'] => ({
  ...options,
  legend: legend ?? options?.legend
});
