import store from '@store';
import {ACCESS_TOKEN, BASE_URL, TOKEN_EXPIRED} from '@utils/constants';
import Storage from '@utils/storage';
import axios from 'axios';

const getAxiosInstance = async () => {
  const instance = axios.create({
    baseURL: BASE_URL.Test,
    headers: {},
  });

  instance.interceptors.request.use(
    async config => {
      const {environment} = await store.getState().general;
      config.baseURL = BASE_URL[environment];
      const data = getRequestBody(config);
      if (__DEV__) {
        console.log(
          `%c[REQUEST] ${config.url}`,
          'color: #10B981; font-weight: bold',
          config,
        );
      }

      /**
       * @description routes doesn't need accesstoken
       */
      if (
        config.url.lastIndexOf('token') >= 0 ||
        config.url.lastIndexOf('refreshToken') >= 0
      ) {
        return {...config, data};
      }

      const accessToken = await Storage.getItem(ACCESS_TOKEN);
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }

      return {...config, data};
    },
    error => {
      return Promise.reject(error);
    },
  );

  instance.interceptors.response.use(
    async response => {
      if (__DEV__) {
        console.log(
          `%c[RESPONSE] ${response.config.url}`,
          'color: #FBBF24; font-weight: bold',
          response,
        );
      }

      return response.data;
    },
    async error => {
      const config = error.config;
      if (error.response.status === TOKEN_EXPIRED) {
      }

      if (__DEV__) {
        console.log(
          `%c[RESPONSE ERROR] ${config.url}`,
          'color: #EF4444; font-weight: bold',
          error.response,
        );
      }

      return Promise.reject(error);
    },
  );

  return instance;
};

const getRequestBody = config => {
  let data = '';
  if (
    config.data &&
    config.headers['Content-Type'] === 'application/x-www-form-urlencoded'
  ) {
    for (const key in config.data) {
      data = data + `${key}=${config.data[key]}&`;
    }
    data = data.slice(0, data.length - 1);
  } else {
    data = config.data;
  }

  return data;
};

const api = async (url, options) => {
  try {
    const API = await getAxiosInstance();
    return API({url, ...options});
  } catch (error) {
    return Promise.reject(error);
  }
};

export default api;
