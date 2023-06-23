import { LOGIN_FAILED, LOGIN_SUCCESS } from './constants';

export interface Props {
  onLoginSuccess: (data: object) => void;
}

export interface TData {
  data: { status: boolean; data: object; message: string };
}

export interface LoginSuccessData {
  user: object;
  tokens: {
    access: { token: string };
  };
}

export interface LoginSuccessPayload {
  data: LoginSuccessData;
}

export interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  payload: LoginSuccessPayload;
}

export interface LoginFailedPayload {
  message: string;
}

export type LoginFailedAction = {
  type: typeof LOGIN_FAILED;
  payload: LoginFailedPayload;
};

export interface UserSubmitForm {
  email: string;
  password: string;
}
