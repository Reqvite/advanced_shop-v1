import axios from 'axios';
import {store} from '@/app/providers/StoreProvider/config/store';
import {actions as userActions} from '@/slices/user';
import {notificationService} from '../services';

const $protectedApi = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`
});

$protectedApi.interceptors.request.use(
  async (config) => {
    const {accessToken} = store.instance.getState().user;
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    } else {
      store.instance.dispatch(userActions.openModal());
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

$protectedApi.interceptors.response.use(
  (response) => {
    return response.data;
  },
  async (error) => {
    const request = error?.config;
    const {accessToken} = store.instance.getState().user;
    if (error.response.status === 401 && !request._prev && accessToken) {
      request._prev = true;
      try {
        await store.instance.dispatch(userActions.refreshToken());
        return $protectedApi(request);
      } catch (error: any) {
        notificationService.error(error.response.data.message);
      }
    } else {
      notificationService.error(error.response.data.message);
    }
    return Promise.reject(error);
  }
);

export {$protectedApi};
