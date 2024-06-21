import {Box, SxProps} from '@mui/material';
import {BarDatum, ResponsiveBar, ResponsiveBarSvgProps} from '@nivo/bar';
import {ReactElement} from 'react';
import {
  barLabelFormat,
  barValueFormat,
  defaultAxisBottomOptions,
  defaultAxisLeftOptions,
  defaultKeys,
  defaultLegends,
  defs
} from './model/defaultValues.const';
import {getAxis} from './model/getAxis';

const defaultStyles = {
  height: 500,
  width: '100%'
};

type Props = ResponsiveBarSvgProps<BarDatum> & {
  data: BarDatum[];
  indexBy: string;
  sx?: SxProps;
  leftLegend?: string;
};

export const Bar = ({
  data,
  sx,
  indexBy = 'month',
  leftLegend = 'count',
  ariaLabel = 'Bar',
  keys = defaultKeys,
  axisBottom = defaultAxisBottomOptions,
  axisLeft = defaultAxisLeftOptions,
  labelFormat = barLabelFormat,
  valueFormat = barValueFormat,
  ...otherProps
}: Props): ReactElement => {
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
        valueFormat={valueFormat}
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
        labelFormat={labelFormat}
        legends={defaultLegends}
        axisBottom={axisBottomOptions}
        axisLeft={axisLeftOptions}
        ariaLabel={ariaLabel}
        enableLabel={false}
        labelSkipWidth={12}
        labelSkipHeight={12}
        role="application"
        barAriaLabel={(e) => e.id + ': ' + e.formattedValue + `In ${indexBy}` + e.indexValue}
        {...otherProps}
      />
    </Box>
  );
};
