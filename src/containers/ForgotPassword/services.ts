import Service from 'src/service';

import { FormForgotPassword } from './types';

export const forgotPassword = (data: FormForgotPassword) => Service.post('/v1/auth/forgot-password', data);
