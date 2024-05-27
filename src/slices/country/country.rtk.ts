import {createApi} from '@reduxjs/toolkit/query/react';
import {axiosBaseQuery} from '@/shared/api/baseQuery';
import {CountryI, CountryTransformI} from '@/shared/types/country';

const baseUrl = 'https://countriesnow.space/api/v0.1';

export const countryApi = createApi({
  reducerPath: 'countryApi',
  baseQuery: axiosBaseQuery({baseUrl}),
  tagTypes: [],
  keepUnusedDataFor: 3600,
  endpoints: (builder) => ({
    getCountries: builder.query<CountryTransformI, void>({
      query: () => ({
        url: '/countries'
      }),
      transformResponse: (response: CountryI[]) => {
        return {
          data: response,
          transformedData: [
            ...response.map((item) => ({
              label: item.country,
              value: item.country,
              _id: item.country
            }))
          ]
        };
      },
      providesTags: []
    })
  })
});

export const {useGetCountriesQuery} = countryApi;
