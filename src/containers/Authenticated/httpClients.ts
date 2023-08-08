import Service from '../../service';

export const isMe = () => Service.get('/v1/auth/me');
export const setHeader = (token: string) => Service.setBearerToken(token);
