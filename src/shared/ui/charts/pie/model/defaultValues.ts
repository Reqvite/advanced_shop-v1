import {PieProps} from '../../types';

const defaultLegends: PieProps['legends'] = [
  {
    anchor: 'bottom',
    direction: 'row',
    justify: false,
    translateX: 0,
    translateY: 56,
    itemsSpacing: 0,
    itemWidth: 100,
    itemHeight: 18,
    itemTextColor: '#999',
    itemDirection: 'left-to-right',
    itemOpacity: 1,
    symbolSize: 18,
    symbolShape: 'circle',
    effects: [
      {
        on: 'hover',
        style: {
          itemTextColor: '#000'
        }
      }
    ]
  }
];

export {defaultLegends};
