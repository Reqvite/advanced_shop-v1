import {SxProps} from '@mui/material';
import {ReactElement} from 'react';
import {useSearchParams} from 'react-router-dom';
import {TimeLine} from '@/shared/enums/timeline.enum';
import {priceService} from '@/shared/services';
import {GetOrdersStatistic} from '@/shared/types/dashboard';
import {TabOptionsI} from '@/shared/types/options';
import {Loader} from '@/shared/ui';
import {Bar, ChartCard} from '@/shared/ui/charts';

type Props = {
  title?: string;
  useQuery: GetOrdersStatistic;
  tabOptions?: TabOptionsI[];
  sx?: SxProps;
};

const defaultParamName = 'timeline';

export const BarTimelineCard = ({tabOptions, title, useQuery, sx}: Props): ReactElement => {
  const [params, setParams] = useSearchParams();
  const timeline = (params.get(defaultParamName) as TimeLine) || TimeLine.Month;
  const {data = [], isLoading} = useQuery({timeline});

  if (isLoading) return <Loader />;

  const onChangeTab = (param: TimeLine): void => {
    setParams({timeline: param});
  };

  return (
    <ChartCard<TimeLine>
      tabDefaultValue={timeline}
      tabOptions={tabOptions}
      onChangeTab={onChangeTab}
      title={title}
      sx={sx}
      ChartComponent={
        <Bar
          data={data}
          labelFormat=".0s"
          valueFormat={(value) => String(priceService.getFixedPrice(value))}
          indexBy={data[0]?.indexBy}
        />
      }
    />
  );
};
