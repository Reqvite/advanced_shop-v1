import {BarDatum} from '@nivo/bar';
import {useGetOrdersStatisticQuery} from '@/slices/dashboard/dashboard.rtk';
import {TimeLine} from '../enums/timeline.enum';

type GetOrdersStatistic = typeof useGetOrdersStatisticQuery;

type GetOrdersStatisticQuery = {timeline: TimeLine};
type BarDatumWithIndex = BarDatum & {indexBy: string};

export {type BarDatumWithIndex, type GetOrdersStatistic, type GetOrdersStatisticQuery};
