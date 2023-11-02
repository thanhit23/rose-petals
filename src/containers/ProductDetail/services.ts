import Service from 'src/service';

export const getRelatedProducts = (id: string) => Service.get(`/v1/products?related=${id}&limit=4`);
