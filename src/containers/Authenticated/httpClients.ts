import Service from '../../service';

export const isMe = () => Service.get('/admin/auth/me');
export const setHeader = (token: string) => Service.setBearerToken(token);
