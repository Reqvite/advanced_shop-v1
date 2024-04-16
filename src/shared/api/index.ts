import axios from 'axios';
import {store} from '@/app/providers/StoreProvider/config/store';
import {refreshToken} from '@/slices/user/actions';

const $api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`
});

const $apiRefresh = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`
});

$api.interceptors.request.use(
  async (config) => {
    const {accessToken} = store.instance.getState().user;
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

$api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  async (error) => {
    const request = error?.config;

    const {accessToken} = store.instance.getState().user;

    if (error.response.status === 401 && !request._prev && accessToken) {
      request._prev = true;
      try {
        await store.instance.dispatch(refreshToken());
        return $api(request);
      } catch (refreshError) {
        console.error('Failed to refresh tokens:', refreshError);
      }
    }
    return Promise.reject(error);
  }
);

$apiRefresh.interceptors.request.use(
  async (config) => {
    const {refreshToken} = store.instance.getState().user;
    if (refreshToken) {
      config.headers.Authorization = `Bearer ${refreshToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

$apiRefresh.interceptors.response.use((response) => {
  return response.data;
});

export {$api, $apiRefresh};
