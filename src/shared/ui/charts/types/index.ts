import {BarDatum, ResponsiveBarSvgProps} from '@nivo/bar';
import {DefaultRawDatum, PieSvgProps} from '@nivo/pie';

export type BarProps = ResponsiveBarSvgProps<BarDatum>;
export type PieProps = PieSvgProps<DefaultRawDatum>;

export type AxisOptions = {
  legend?: string;
  tickSize?: number;
  tickPadding?: number;
  tickRotation?: number;
  legendPosition?: 'start' | 'middle' | 'end';
  legendOffset?: number;
  truncateTickAt?: number;
};
