import {Box, SxProps} from '@mui/material';
import {ChoroplethProps, ResponsiveChoropleth} from '@nivo/geo';
import {ReactElement} from 'react';
import {choroplethDefaultValueFormat, defaultLegends} from './model/defaultValues.const';
import map from './model/worldMap.json';

const defaultStyles = {
  height: 500,
  width: '100%'
};

type Props = Omit<ChoroplethProps, 'features'> & {
  sx?: SxProps;
  features?: ChoroplethProps['features'];
};

export const Choropleth = ({
  data,
  sx,
  features = map.features,
  domain,
  valueFormat = choroplethDefaultValueFormat,
  ...otherProps
}: Props): ReactElement => {
  return (
    <Box sx={{...defaultStyles, ...sx}}>
      <ResponsiveChoropleth
        data={data}
        margin={{top: 100, right: 0, bottom: 0, left: 0}}
        features={features}
        domain={domain}
        valueFormat={valueFormat}
        legends={defaultLegends}
        colors="nivo"
        unknownColor="#666666"
        label="properties.name"
        projectionType="mercator"
        projectionScale={100}
        graticuleLineWidth={0.5}
        isInteractive={true}
        projectionTranslation={[0.5, 0.5]}
        projectionRotation={[0, 0, 0]}
        enableGraticule={false}
        graticuleLineColor="#dddddd"
        borderWidth={0.5}
        borderColor="#152538"
        fillColor="1"
        role="1"
        onMouseMove={() => {}}
        onMouseEnter={() => {}}
        onMouseLeave={() => {}}
        onClick={() => {}}
        {...otherProps}
      />
    </Box>
  );
};
