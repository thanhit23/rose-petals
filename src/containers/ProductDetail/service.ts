import Service from 'src/service/index';

export const getProductDetail = (slug: string) => Service.get(`v1/products/${slug}`);
