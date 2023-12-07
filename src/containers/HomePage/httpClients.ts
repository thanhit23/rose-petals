import Service from '../../service';

export const getBrands = () => Service.get('/v1/brands');
export const getWeekTopProduct = () => Service.get(`/v1/products?week_top=true&limit=6`);
export const getNewTopProduct = () => Service.get(`/v1/products?new_top=true&limit=6`);
export const getFeaturedProducts = () => Service.get(`/v1/products?featured=true`);
export const getLinkCategories = () => Service.get(`/v1/categories`);
