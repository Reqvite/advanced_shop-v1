import {createApi} from '@reduxjs/toolkit/query/react';
import {axiosBaseQuery} from '@/shared/api/baseQuery';
import {ApiPathEnum} from '@/shared/enums/apiPath.enum';
import {RtkApiTagsEnum} from '@/shared/enums/rtkTags.enum';
import {forceRefetch} from '@/shared/lib/helpers';
import {ReviewI} from '@/shared/types/review';

export const reviewsApi = createApi({
  reducerPath: 'reviewsApi',
  baseQuery: axiosBaseQuery(),
  tagTypes: [RtkApiTagsEnum.Cart, RtkApiTagsEnum.Orders],
  endpoints: (builder) => ({
    getReviewsByProductId: builder.query<ReviewI[], string>({
      query: (id: string) => ({
        url: `${ApiPathEnum.REVIEWS}/${id}`
      }),
      serializeQueryArgs: ({endpointName}) => {
        return endpointName;
      },
      forceRefetch,
      providesTags: [RtkApiTagsEnum.Orders]
    })
  })
});

export const {useGetReviewsByProductIdQuery} = reviewsApi;
