import Service from 'src/service';

export const getRelatedProducts = (id: string) => Service.get(`/v1/products?category=${id}&limit=4`);
export const getComments = (idProduct: string, page: number) =>
  Service.get(`/v1/product/reviews?product=${idProduct}&page=${page}`);
export const createComment = (data: object) => Service.post(`/v1/product-review`, data);
export const deleteComment = (id: string) => Service.delete(`/v1/product-review/${id}`);
export const updateComment = (data: object, id: string) => Service.put(`/v1/product-review/${id}`, data);
