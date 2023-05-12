import { LOGIN_SUCCESS, LOGIN_FAILED } from './constants';

export interface Props {
  onLoginSuccess: (data: object) => void;
  onLoginFailed: (message: string) => void;
}

export interface TData {
  data: { status: boolean; data: object; message: string };
}

export interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  payload: { data: object };
}

export interface LoginFailedAction {
  type: typeof LOGIN_FAILED;
}
