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

export interface AuthType {
  dob: string;
  email: string;
  gender: number;
  id: string;
  isEmailVerified: boolean;
  lastLoginAt: string;
  location: string;
  name: string;
  phoneNumber: number;
  role: string;
  social: string;
  avatar: string;
}

export type Auth = {
  auth: AuthType;
};
