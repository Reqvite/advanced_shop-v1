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

const handleAxiosError = (axiosError: AxiosError<BaseError>): {error: BaseError} => {
  const code = axiosError.response?.data?.code || axiosError.response?.status || '';
  const message = axiosError.response?.data?.message || axiosError?.message || ErrorMessages.ERROR;
  const details = axiosError.response?.data?.details || [];
  const error: BaseError = {
    code,
    message,
    details
  };

  return {error};
};

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
      const error = axiosError as AxiosError<BaseError>;

      return handleAxiosError(error);
    }
  };
