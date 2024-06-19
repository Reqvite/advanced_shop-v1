import {BarDatum} from '@nivo/bar';
import {ChoroplethProps} from '@nivo/geo';
import {useGetOrdersStatisticQuery} from '@/slices/dashboard/dashboard.rtk';
import {TimeLine} from '../enums/timeline.enum';

type GetOrdersStatistic = typeof useGetOrdersStatisticQuery;
type GetOrdersStatisticQuery = {timeline: TimeLine};
type BaseBarDatum = BarDatum & {
  indexBy: TimeLine;
};
type GetOrdersGeoResponse = {
  values: ChoroplethProps['data'];
  domain: number[];
};

interface BarDatumVariantsI {
  [TimeLine.Month]: {
    month: number;
  };
  [TimeLine.Week]: {
    week: number;
  };
  [TimeLine.Quarter]: {
    quarter: number;
  };
}

type BarDatumWithIndex<T extends TimeLine> = BaseBarDatum & BarDatumVariantsI[T];

export {
  type BarDatumWithIndex,
  type GetOrdersGeoResponse,
  type GetOrdersStatistic,
  type GetOrdersStatisticQuery
};
