import Service from '../../service';

export const getMe = () => Service.get('/v1/auth/me');
export const getBrands = () => Service.get('/v1/brands');
export const getWeekTopProduct = () => Service.get(`/v1/products?week_top=true&limit=6`);
export const getNewTopProduct = () => Service.get(`/v1/products?new_top=true&limit=6`);
export const setBearerToken = (token: string) => Service.setBearerToken(token);
