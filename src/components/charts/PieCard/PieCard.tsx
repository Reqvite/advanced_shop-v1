import {SxProps} from '@mui/material';
import {DefaultRawDatum} from '@nivo/pie';
import {ReactElement} from 'react';
import {useSearchParams} from 'react-router-dom';
import {TimeLine} from '@/shared/enums/timeline.enum';
import {GetOrdersStatistic} from '@/shared/types/dashboard';
import {TabOptionsI} from '@/shared/types/options';
import {ChartCard, Pie} from '@/shared/ui/charts';

type Props = {
  title?: string;
  useQuery: GetOrdersStatistic;
  tabOptions?: TabOptionsI[];
  sx?: SxProps;
};

const defaultParamName = 'timeline';

export const PieCard = ({tabOptions, title, sx, useQuery}: Props): ReactElement => {
  const [params, setParams] = useSearchParams();
  const timeline = (params.get(defaultParamName) as TimeLine) || TimeLine.Month;
  const {data = [], isLoading} = useQuery({timeline});

  const mappedData = data.map((item) => ({
    id: item[timeline],
    value: item.sales,
    label: item[timeline]
  }));

  const onChangeTab = (param: TimeLine): void => {
    setParams({timeline: param});
  };

  return (
    <ChartCard<TimeLine>
      isLoading={isLoading}
      tabDefaultValue={timeline}
      tabOptions={tabOptions}
      onChangeTab={onChangeTab}
      sx={sx}
      title={`${title} ${timeline}`}
      ChartComponent={<Pie data={mappedData as DefaultRawDatum[]} legends={undefined} />}
    />
  );
};
