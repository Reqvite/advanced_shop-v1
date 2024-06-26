import {Box, SxProps} from '@mui/material';
import {DefaultRawDatum, PieSvgProps, ResponsivePie} from '@nivo/pie';
import {ReactElement} from 'react';
import {defaultLegends} from './model/defaultValues';

const defaultStyles = {
  height: 500,
  width: '100%'
};

type Props = Omit<PieSvgProps<DefaultRawDatum>, 'width' | 'height'> & {
  data: DefaultRawDatum[];
  sx?: SxProps;
};

export const Pie = ({data, sx, ...otherProps}: Props): ReactElement => (
  <Box sx={{...defaultStyles, ...sx}}>
    <ResponsivePie
      data={data}
      margin={{top: 40, right: 80, bottom: 80, left: 80}}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderWidth={1}
      borderColor={{
        from: 'color',
        modifiers: [['darker', 0.2]]
      }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#333333"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{from: 'color'}}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{
        from: 'color',
        modifiers: [['darker', 2]]
      }}
      enableArcLinkLabels
      legends={defaultLegends}
      {...otherProps}
    />
  </Box>
);
