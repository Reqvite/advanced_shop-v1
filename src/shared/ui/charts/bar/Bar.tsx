import {Box, SxProps} from '@mui/material';
import {BarDatum, ResponsiveBar, ResponsiveBarSvgProps} from '@nivo/bar';
import {
  defaultAxisBottomOptions,
  defaultAxisLeftOptions,
  defaultKeys,
  defaultLegends,
  defs
} from './model/default.const';
import {getAxis} from './model/getAxis';

const dataFromAPI = [
  {month: 'January', sales: 1500, orders: 30},
  {month: 'February', sales: 1800, orders: 35},
  {month: 'March', sales: 2200, orders: 40},
  {month: 'April', sales: 2500, orders: 45},
  {month: 'May', sales: 2800, orders: 50},
  {month: 'June', sales: 3000, orders: 55},
  {month: 'July', sales: 3200, orders: 60},
  {month: 'August', sales: 3500, orders: 65},
  {month: 'September', sales: 3800, orders: 70},
  {month: 'October', sales: 4000, orders: 75},
  {month: 'November', sales: 4200, orders: 80},
  {month: 'December', sales: 4500, orders: 85}
];

const defaultStyles = {
  height: 800,
  width: '100%'
};

type Props = ResponsiveBarSvgProps<BarDatum> & {
  data: BarDatum[];
  indexBy: string;
  sx?: SxProps;
  leftLegend?: string;
};

export const Bar = ({
  data = dataFromAPI,
  sx,
  keys = defaultKeys,
  indexBy = 'month',
  axisBottom = defaultAxisBottomOptions,
  axisLeft = defaultAxisLeftOptions,
  leftLegend = 'count',
  ariaLabel = 'Bar',
  ...otherProps
}: Props) => {
  const axisBottomOptions = getAxis({options: axisBottom, legend: indexBy});
  const axisLeftOptions = getAxis({options: axisLeft, legend: leftLegend});

  return (
    <Box sx={{...defaultStyles, ...sx}}>
      <ResponsiveBar
        maxValue="auto"
        data={data}
        keys={keys}
        indexBy={indexBy}
        margin={{top: 50, right: 130, bottom: 50, left: 60}}
        padding={0.3}
        valueScale={{type: 'symlog'}}
        indexScale={{type: 'band', round: true}}
        colors={{scheme: 'accent'}}
        borderColor={{
          from: 'color',
          modifiers: [['brighter', 2]]
        }}
        labelTextColor={{
          from: 'color',
          modifiers: [['brighter', 2]]
        }}
        groupMode="grouped"
        defs={defs}
        axisBottom={axisBottomOptions}
        axisLeft={axisLeftOptions}
        labelSkipWidth={12}
        labelSkipHeight={12}
        legends={defaultLegends}
        role="application"
        ariaLabel={ariaLabel}
        barAriaLabel={(e) => e.id + ': ' + e.formattedValue + `In ${indexBy}` + e.indexValue}
        {...otherProps}
      />
    </Box>
  );
};
