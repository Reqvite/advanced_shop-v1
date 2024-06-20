import {SxProps} from '@mui/material';
import {ReactElement} from 'react';
import {ChartCard, Choropleth} from '@/shared/ui/charts';
import {defaultDomain} from '@/shared/ui/charts/choropleth/model/defaultValues.const';
import {useGetOrdersGeoQuery} from '@/slices/dashboard/dashboard.rtk';

type Props = {
  title?: string;
  sx?: SxProps;
};

export const ChoroplethCard = ({title, sx}: Props): ReactElement => {
  const {data = {values: [], domain: defaultDomain}, isLoading} = useGetOrdersGeoQuery();

  return (
    <ChartCard
      isLoading={isLoading}
      sx={sx}
      title={title}
      ChartComponent={<Choropleth data={data.values} domain={data.domain} />}
    />
  );
};
