import Service from 'src/service/index';

export const getProductDetail = (slug: string) => Service.get(`v1/products/${slug}`);

export const getProduct = (params: any) => Service.get('v1/products', params);
