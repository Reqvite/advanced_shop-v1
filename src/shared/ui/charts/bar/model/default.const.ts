import {AxisOptions, BarProps} from '../../types';

const axisOptions: AxisOptions = {
  tickSize: 5,
  tickPadding: 5,
  tickRotation: 0,
  truncateTickAt: 0,
  legendPosition: 'middle'
};
const defaultAxisBottomOptions: BarProps['axisBottom'] = {
  ...axisOptions,
  legendOffset: 32,
  legend: 'defaultLegend1'
};
const defaultAxisLeftOptions: BarProps['axisLeft'] = {
  ...axisOptions,
  legendOffset: -45,
  legend: 'defaultLegend2'
};
const defaultKeys: BarProps['keys'] = ['sales', 'orders'];
const defs: BarProps['defs'] = [
  {
    id: 'dots',
    type: 'patternDots',
    background: 'inherit',
    color: '#38bcb2',
    size: 4,
    padding: 1,
    stagger: true
  },
  {
    id: 'lines',
    type: 'patternLines',
    background: 'red',
    color: '#eed312',
    rotation: -45,
    lineWidth: 6,
    spacing: 10
  }
];

const defaultLegends: BarProps['legends'] = [
  {
    dataFrom: 'keys',
    anchor: 'bottom-right',
    direction: 'column',
    justify: false,
    translateX: 120,
    translateY: 0,
    itemsSpacing: 2,
    itemWidth: 100,
    itemHeight: 20,
    itemDirection: 'left-to-right',
    itemOpacity: 0.85,
    symbolSize: 20,
    effects: [
      {
        on: 'hover',
        style: {
          itemOpacity: 1
        }
      }
    ]
  }
];

export {defaultAxisBottomOptions, defaultAxisLeftOptions, defaultKeys, defaultLegends, defs};
