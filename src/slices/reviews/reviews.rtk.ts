import {createApi} from '@reduxjs/toolkit/query/react';
import {axiosBaseQuery} from '@/shared/api/baseQuery';
import {Messages} from '@/shared/const/messages.const';
import {NotificationMessage} from '@/shared/const/notificationMessages';
import {ApiPathEnum} from '@/shared/enums/apiPath.enum';
import {RtkApiTagsEnum} from '@/shared/enums/rtkTags.enum';
import {onQueryStartedToast} from '@/shared/lib/helpers';
import {CreateReviewI, ReviewI, UpdateReviewI} from '@/shared/types/review';

const label = 'Review';

export const reviewsApi = createApi({
  reducerPath: 'reviewsApi',
  baseQuery: axiosBaseQuery(),
  tagTypes: [RtkApiTagsEnum.Reviews],
  endpoints: (builder) => ({
    getReviewsByProductId: builder.query<ReviewI[], string>({
      query: (id: string) => ({
        url: `${ApiPathEnum.REVIEWS}/${id}`
      }),
      providesTags: [RtkApiTagsEnum.Reviews]
    }),
    createReview: builder.mutation<ReviewI, CreateReviewI>({
      query: (data) => ({
        url: `${ApiPathEnum.REVIEWS}`,
        method: 'POST',
        needAuth: true,
        data
      }),
      onQueryStarted: (_, {queryFulfilled}) =>
        onQueryStartedToast(
          {queryFulfilled},
          NotificationMessage.SUCCESS(Messages.CREATED_SUCCESSFULLY(label))
        ),
      invalidatesTags: [RtkApiTagsEnum.Reviews]
    }),
    updateReview: builder.mutation<ReviewI, UpdateReviewI>({
      query: (data) => ({
        url: `${ApiPathEnum.REVIEWS}`,
        method: 'PUT',
        needAuth: true,
        data
      }),
      onQueryStarted: (_, {queryFulfilled}) =>
        onQueryStartedToast(
          {queryFulfilled},
          NotificationMessage.SUCCESS(Messages.UPDATED_SUCCESSFULLY(label))
        ),
      invalidatesTags: [RtkApiTagsEnum.Reviews]
    }),
    deleteReview: builder.mutation<void, string>({
      query: (_id: string) => ({
        url: `${ApiPathEnum.REVIEWS}/${_id}`,
        method: 'DELETE',
        needAuth: true
      }),
      onQueryStarted: (_, {queryFulfilled}) =>
        onQueryStartedToast(
          {queryFulfilled},
          NotificationMessage.SUCCESS(Messages.DELETED_SUCCESSFULLY(label))
        ),
      invalidatesTags: [RtkApiTagsEnum.Reviews]
    })
  })
});

export const {
  useGetReviewsByProductIdQuery,
  useUpdateReviewMutation,
  useCreateReviewMutation,
  useDeleteReviewMutation
} = reviewsApi;
