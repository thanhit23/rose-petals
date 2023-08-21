import { GET_ME_SUCCESS, LOGOUT } from './constants';

export interface TData {
  data: { status: boolean; data: object; message?: string };
}

export interface GetMePayload {
  data: object;
}

export interface GetMeAction {
  type: typeof GET_ME_SUCCESS;
  payload: GetMePayload;
}

export interface LogoutAction {
  type: typeof LOGOUT;
}

export type Auth = {
  auth: object;
};
