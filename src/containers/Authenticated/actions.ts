import { CHECK_TOKEN_FAILED, CHECK_TOKEN_REQUEST, CHECK_TOKEN_SUCCESS, REDIRECT_LOGIN } from './constants';
import { SET_AUTHENTICATION } from './constants';

export const sendRequestToken = (token: string) => ({
  type: CHECK_TOKEN_REQUEST,
  payload: {
    token,
  },
});

export const redirectLogin = () => ({
  type: REDIRECT_LOGIN,
});

export const setAuth = (user: object) => ({
  type: SET_AUTHENTICATION,
  payload: {
    user,
  },
});

export const checkTokenSuccess = () => ({
  type: CHECK_TOKEN_SUCCESS,
});

export const checkTokenFailed = () => ({
  type: CHECK_TOKEN_FAILED,
});
