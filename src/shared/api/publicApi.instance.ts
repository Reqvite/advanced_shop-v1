import axios from 'axios';

const $publicApi = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`
});

$publicApi.interceptors.response.use((response) => {
  return response.data;
});

export {$publicApi};
