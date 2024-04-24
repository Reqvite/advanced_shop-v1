import axios from 'axios';
import {notificationService} from '../services';

const $publicApi = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`
});

$publicApi.interceptors.response.use(
  (response) => {
    return response.data;
  },
  async (error) => {
    notificationService.error(error.response.data.message);
    return Promise.reject(error);
  }
);

export {$publicApi};
