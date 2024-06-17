import {createApi} from '@reduxjs/toolkit/query/react';
import {axiosBaseQuery} from '@/shared/api/baseQuery';
import {RtkApiTagsEnum} from '@/shared/enums/rtkTags.enum';
import {BarDatumWithIndex, GetOrdersStatisticQuery} from '@/shared/types/dashboard';
import {getOrdersStatistic} from './queries';

export const dashboardApi = createApi({
  reducerPath: 'dashboardApi',
  baseQuery: axiosBaseQuery(),
  tagTypes: [RtkApiTagsEnum.Cart, RtkApiTagsEnum.Orders],
  endpoints: (builder) => ({
    getOrdersStatistic: builder.query<BarDatumWithIndex[], GetOrdersStatisticQuery>({
      query: (params) => getOrdersStatistic(params)
    })
  })
});

export const {useGetOrdersStatisticQuery} = dashboardApi;
