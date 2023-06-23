import { LOGIN_FAILED, LOGIN_SUCCESS } from './constants';
import { LoginFailedAction, LoginSuccessAction, LoginSuccessData } from './types';

export const loginSuccess = (data: LoginSuccessData): LoginSuccessAction => ({
  type: LOGIN_SUCCESS,
  payload: { data },
});

export const loginFailed = (message: string): LoginFailedAction => ({
  type: LOGIN_FAILED,
  payload: { message },
});
