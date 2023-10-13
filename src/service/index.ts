import axios, { AxiosResponse } from 'axios';
import { map } from 'lodash';

import store from '../store';
import { BASE_URL, LOGOUT_REQUEST, SERVER_ERROR, UNAUTHORIZED } from './constants';

class Service {
  instance;
  constructor() {
    this.instance = axios.create({
      baseURL: BASE_URL,
    });
    this.instance.interceptors.response.use(this.handleSuccess, this.handleError);
  }

  setHeaderDefault = (headers: object) => {
    map(headers, (value: string, key: string) => {
      this.instance.defaults.headers.common[key] = value;
    });
  };

  setBearerToken = (token: string) => {
    this.setHeaderDefault({ Authorization: `Bearer ${token}` });
  };

  handleSuccess = (res: AxiosResponse): Promise<AxiosResponse> | AxiosResponse => res;

  handleError = (err: { response: { status: number; data: { message: string } } }) => {
    const {
      response: { status, data },
    } = err;

    switch (status) {
      case UNAUTHORIZED:
        store.dispatch({ type: LOGOUT_REQUEST });
        break;
      case SERVER_ERROR:
        setTimeout(() => store.dispatch({ type: LOGOUT_REQUEST }), 6000);
        break;
      default:
        break;
    }
    return { data };
  };

  get = (url: string, params: object = {}) => this.instance.get(url, { params });

  post = (url: string, body: object) => this.instance.post(url, body);

  patch = (url: string, body: object) => this.instance.patch(url, body);

  put = (url: string, body: object) => this.instance.put(url, body);

  delete = (url: string) => this.instance.delete(url);
}

export default new Service();
