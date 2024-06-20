import {ApiPathEnum, CartApiPath} from '@/shared/enums/apiPath.enum';
import {buildGetRequestOptions} from '@/shared/lib/helpers/buildGetRequestOptions';
import {GetOrdersQuery} from '@/shared/types/cart';
import {RequestOptions} from '@/shared/types/requestOptions';

export const getUserOrders = (params: GetOrdersQuery): RequestOptions => {
  return buildGetRequestOptions<GetOrdersQuery>({
    apiPath: ApiPathEnum.CART,
    params,
    path: CartApiPath.ORDERS,
    needAuth: true
  });
};
