import {BarDatum} from '@nivo/bar';
import {useGetOrdersStatisticQuery} from '@/slices/dashboard/dashboard.rtk';
import {TimeLine} from '../enums/timeline.enum';

type GetOrdersStatistic = typeof useGetOrdersStatisticQuery;

type GetOrdersStatisticQuery = {timeline: TimeLine};

type BaseBarDatum = BarDatum & {
  indexBy: TimeLine;
};

interface BarDatumVariantsI {
  [TimeLine.Month]: {
    month: number;
  };
  [TimeLine.Quarter]: {quarter: number};
  [TimeLine.Week]: {
    week: number;
  };
}

type BarDatumWithIndex<T extends TimeLine> = BaseBarDatum & BarDatumVariantsI[T];

export {type BarDatumWithIndex, type GetOrdersStatistic, type GetOrdersStatisticQuery};
