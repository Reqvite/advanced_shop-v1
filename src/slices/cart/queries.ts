import {ApiPathEnum, CartApiPath} from '@/shared/enums/apiPath.enum';
import {encodeSearchParams} from '@/shared/lib/helpers';
import {RequestOptions} from '@/shared/types/requestOptions';
import {GetOrdersQuery} from './cart.rtk';

const buildGetCartRequestOptions = ({
  params,
  path = '',
  needAuth
}: {
  params: GetOrdersQuery;
  path?: string;
  needAuth?: boolean;
}): RequestOptions => {
  if (!params) {
    return {url: ApiPathEnum.CART};
  }

  return {
    url: `${ApiPathEnum.CART}${path}`,
    params: encodeSearchParams(params),
    needAuth
  };
};

export const getUserOrders = (params: GetOrdersQuery): RequestOptions => {
  return buildGetCartRequestOptions({params, path: CartApiPath.ORDERS, needAuth: true});
};
