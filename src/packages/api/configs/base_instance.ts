import axios, { AxiosError, AxiosInstance } from 'axios';
import { AxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie';

export const BASE_INSTANCE: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URI,
  headers: {
    'Content-Type': 'application/json',
  },
});
BASE_INSTANCE.interceptors.request.use(
  (config) => {
    const token = Cookies.get('token');
    if (token) {
      config.headers.Authorization = `${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

BASE_INSTANCE.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status !== 401) {
      // return null;
    } else if (error.response?.status === 401) {
      if (originalRequest._retry) {
        //logOut API
        return Promise.reject(error);
      }
      originalRequest._retry = true;

      try {
        //refreshToken
        //set access_token to cookie
        // originalRequest.headers.Authorization = `${access_token}`;
        return BASE_INSTANCE(originalRequest);
      } catch (_error) {
        return Promise.reject(_error);
      }
    }
    return Promise.reject(error);
  }
);

export const customInstance = <T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig
): Promise<T> => {
  const source = axios.CancelToken.source();
  const promise = BASE_INSTANCE({
    ...config,
    ...options,
    cancelToken: source.token,
  }).then(({ data }) => data);

  // @ts-ignore
  promise.cancel = () => {
    source.cancel('Query was cancelled by React Query');
  };

  return promise;
};

