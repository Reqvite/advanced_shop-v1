import {BarDatum, ResponsiveBarSvgProps} from '@nivo/bar';

export type BarProps = ResponsiveBarSvgProps<BarDatum>;

export type AxisOptions = {
  legend?: string;
  tickSize?: number;
  tickPadding?: number;
  tickRotation?: number;
  legendPosition?: 'start' | 'middle' | 'end';
  legendOffset?: number;
  truncateTickAt?: number;
};
