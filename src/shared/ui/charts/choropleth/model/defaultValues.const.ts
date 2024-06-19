import {ChoroplethProps} from '@nivo/geo';

export const defaultLegends: ChoroplethProps['legends'] = [
  {
    anchor: 'bottom-left',
    direction: 'column',
    justify: true,
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
export const defaultDomain = [0, 1000000];
