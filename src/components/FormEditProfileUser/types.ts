import { Auth } from 'src/containers/Authenticated/types';

export type State = { global: Auth };

export interface UserSubmitForm {
  email: string;
  name: string;
  phoneNumber: number;
  location: string;
  gender: string | number;
}
