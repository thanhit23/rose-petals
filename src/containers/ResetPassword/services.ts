import Service from 'src/service';

import { FormResetPassword } from './types';

export const resetPassword = ({ token, password }: FormResetPassword) =>
  Service.post(`/v1/auth/reset-password?token=${token}`, { password });
