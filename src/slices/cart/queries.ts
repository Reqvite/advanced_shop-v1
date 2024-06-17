import {ApiPathEnum, CartApiPath} from '@/shared/enums/apiPath.enum';
import {encodeSearchParams} from '@/shared/lib/helpers';
import {RequestOptions} from '@/shared/types/requestOptions';
import {GetOrdersQuery, GetOrdersStatisticQuery} from './cart.rtk';

const buildGetCartRequestOptions = <T>({
  params,
  path = '',
  needAuth
}: {
  params: T;
  path?: string;
  needAuth?: boolean;
}): RequestOptions => {
  if (!params) {
    return {url: `${ApiPathEnum.CART}${path}`, needAuth};
  }

  return {
    url: `${ApiPathEnum.CART}${path}`,
    params: encodeSearchParams(params),
    needAuth
  };
};

export const getUserOrders = (params: GetOrdersQuery): RequestOptions => {
  return buildGetCartRequestOptions<GetOrdersQuery>({
    params,
    path: CartApiPath.ORDERS,
    needAuth: true
  });
};

export const getOrdersStatistic = (params: GetOrdersStatisticQuery): RequestOptions => {
  return buildGetCartRequestOptions<GetOrdersStatisticQuery>({
    params,
    path: CartApiPath.ORDERS_STATISTIC,
    needAuth: true
  });
};
