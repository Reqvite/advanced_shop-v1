import {ApiPathEnum, DashboardApiPath} from '@/shared/enums/apiPath.enum';
import {buildGetRequestOptions} from '@/shared/lib/helpers/buildGetRequestOptions';
import {GetOrdersStatisticQuery} from '@/shared/types/dashboard';
import {RequestOptions} from '@/shared/types/requestOptions';

export const getOrdersStatistic = (params: GetOrdersStatisticQuery): RequestOptions => {
  return buildGetRequestOptions<GetOrdersStatisticQuery>({
    apiPath: ApiPathEnum.DASHBOARD,
    params,
    path: DashboardApiPath.ORDERS_STATISTIC,
    needAuth: true
  });
};
