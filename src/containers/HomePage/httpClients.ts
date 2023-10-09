import Service from '../../service';

export const getMe = () => Service.get('/v1/auth/me');
export const getBrands = () => Service.get('/v1/brands');
export const setBearerToken = (token: string) => Service.setBearerToken(token);
export const getFeaturedProducts = () => Service.get(`/v1/products?featured=true`);
