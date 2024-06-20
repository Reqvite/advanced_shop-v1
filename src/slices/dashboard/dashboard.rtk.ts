import {createApi} from '@reduxjs/toolkit/query/react';
import {axiosBaseQuery} from '@/shared/api/baseQuery';
import {RtkApiTagsEnum} from '@/shared/enums/rtkTags.enum';
import {TimeLine} from '@/shared/enums/timeline.enum';
import {BarDatumWithIndex, GetOrdersStatisticQuery} from '@/shared/types/dashboard';
import {getOrdersStatistic} from './queries';
import {transformGetOrdersStatistic} from './transform';

export const dashboardApi = createApi({
  reducerPath: 'dashboardApi',
  baseQuery: axiosBaseQuery(),
  tagTypes: [RtkApiTagsEnum.Cart, RtkApiTagsEnum.Orders],
  endpoints: (builder) => ({
    getOrdersStatistic: builder.query<BarDatumWithIndex<TimeLine>[], GetOrdersStatisticQuery>({
      query: (params) => getOrdersStatistic(params),
      transformResponse: transformGetOrdersStatistic
    })
  })
});

export const {useGetOrdersStatisticQuery} = dashboardApi;
