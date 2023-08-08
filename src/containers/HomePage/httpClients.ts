import Service from '../../service';

export const getMe = () => Service.get('/v1/auth/me');
export const setBearerToken = (token: string) => Service.setBearerToken(token);
