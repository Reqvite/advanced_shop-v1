import {monthsNames} from '@/shared/const/monthNames.const';
import {quarterNames} from '@/shared/const/quarterNames.const';
import {TimeLine} from '@/shared/enums/timeline.enum';
import {BarDatumWithIndex} from '@/shared/types/dashboard';

export const transformGetOrdersStatistic = <T extends BarDatumWithIndex<TimeLine>>(
  data: T[]
): T[] => {
  switch (data[0].indexBy) {
    case TimeLine.Month:
      return data.map((item) => ({
        ...item,
        month: monthsNames[item.month as number]
      }));
    case TimeLine.Quarter:
      return data.map((item) => ({
        ...item,
        quarter: quarterNames[item.quarter as number]
      }));
    default:
      return data;
  }
};
