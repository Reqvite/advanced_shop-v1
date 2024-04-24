import {BaseQueryFn} from '@reduxjs/toolkit/query';
import {AxiosError, AxiosRequestConfig, Method} from 'axios';
import {ErrorMessages} from '../const/errorMessages.const';
import {$protectedApi} from './protectedApi.instance';
import {$publicApi} from './publicApi.instance';

interface BaseError {
  code: string | number;
  message: string;
  details: string[];
}

export const axiosBaseQuery =
  (
    {baseUrl}: {baseUrl: string} = {baseUrl: import.meta.env.VITE_API_URL}
  ): BaseQueryFn<
    {
      url: string;
      method?: Method;
      data?: AxiosRequestConfig['data'];
      params?: AxiosRequestConfig['params'];
      needAuth?: boolean;
    },
    unknown,
    BaseError
  > =>
  async ({url, method = 'GET', data, params, needAuth = false}) => {
    try {
      const instance = needAuth
        ? $protectedApi({url: baseUrl + url, method, data, params})
        : $publicApi({url: baseUrl + url, method, data, params});
      const result = await instance;
      return {data: result.data};
    } catch (axiosError: any) {
      const err = axiosError as AxiosError<BaseError>;
      const error: BaseError = {
        code: err.response?.data?.code || err.response?.status || '',
        message: err.response?.data?.message || err?.message || ErrorMessages.ERROR,
        details: err.response?.data?.details || []
      };
      return {error};
    }
  };
