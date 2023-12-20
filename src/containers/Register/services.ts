import Service from '../../service';
import { UserSubmitForm, VerifyCode } from './RegisterForm/types';

export const register = (data: Omit<UserSubmitForm, 'verifyingCode' | 'confirmPassword'>) =>
  Service.post('/v1/auth/register', data);
export const verifyEmail = (email: string) => Service.post('/v1/auth/send-verification-email', { email });
export const verifyCode = (data: VerifyCode) => Service.post('/v1/auth/send-verification-code', data);
