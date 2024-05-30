import {createApi} from '@reduxjs/toolkit/query/react';
import {axiosBaseQuery} from '@/shared/api/baseQuery';
import {AutoCompleteOptionsI} from '@/shared/types/options';
import {transformCountriesResponse, transformCountryCitiesResponse} from './transform';

const baseUrl = 'https://countriesnow.space/api/v0.1';

export const locationApi = createApi({
  reducerPath: 'locationApi',
  baseQuery: axiosBaseQuery({baseUrl}),
  tagTypes: [],
  keepUnusedDataFor: 3600,
  endpoints: (builder) => ({
    getCountries: builder.query<AutoCompleteOptionsI[], void>({
      query: () => ({
        url: '/countries/states'
      }),
      transformResponse: transformCountriesResponse,
      providesTags: []
    }),
    getCountryCity: builder.mutation<AutoCompleteOptionsI[], {country: string}>({
      query: (data) => ({
        method: 'POST',
        url: `/countries/cities`,
        data
      }),
      transformResponse: transformCountryCitiesResponse
    })
  })
});

export const {useGetCountriesQuery, useGetCountryCityMutation} = locationApi;
