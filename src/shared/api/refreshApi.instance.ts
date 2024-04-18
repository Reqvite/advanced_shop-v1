import axios from 'axios';
import {store} from '@/app/providers/StoreProvider/config/store';

const $refreshApi = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`
});

$refreshApi.interceptors.request.use(
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

$refreshApi.interceptors.response.use((response) => {
  return response.data;
});

export {$refreshApi};
