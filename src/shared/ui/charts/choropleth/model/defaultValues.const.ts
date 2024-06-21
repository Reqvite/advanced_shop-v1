import {ChoroplethProps} from '@nivo/geo';

const defaultLegends: ChoroplethProps['legends'] = [
  {
    anchor: 'bottom-left',
    direction: 'column',
    translateX: 20,
    translateY: -100,
    itemsSpacing: 0,
    itemWidth: 94,
    itemHeight: 18,
    itemDirection: 'left-to-right',
    itemTextColor: '#444444',
    itemOpacity: 0.85,
    symbolSize: 18,
    effects: [
      {
        on: 'hover',
        style: {
          itemTextColor: '#000000',
          itemOpacity: 1
        }
      }
    ]
  }
];
const choroplethDefaultValueFormat = '.0s';

export {choroplethDefaultValueFormat, defaultLegends};
