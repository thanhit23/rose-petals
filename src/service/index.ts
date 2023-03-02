import axios from 'axios';
import { map } from 'lodash';

import { UNAUTHORIZED, LOGOUT_REQUEST, BASE_URL, SERVER_ERROR } from './constants';
import { LOGIN_FAILED } from '../containers/Login/constants';
import store from '../store';

class Service {
  instance: any;
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

  handleSuccess = (res: object) => res;

  handleError = (err: { response: { status: number; data: { message: string } } }) => {
    const {
      response: { status, data },
    } = err;

    const { message } = data;
    switch (status) {
      case UNAUTHORIZED:
        store.dispatch({
          type: LOGIN_FAILED,
          payload: {
            message,
          },
        });
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

  delete = (url: string, id: string) => this.instance.delete(url, id);
}

export default new Service();
