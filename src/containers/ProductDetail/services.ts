import Service from 'src/service';

export const getRelatedProducts = (id: string) => Service.get(`/v1/products?category=${id}&limit=4`);
export const getComments = (idProduct: string, page: number) =>
  Service.get(`/v1/product/reviews?product=${idProduct}&page=${page}`);
export const createComment = (data: object) => Service.post(`/v1/product-review`, data);
export const deleteComment = (commentId: string, productId: string) =>
  Service.delete(`/v1/product-review/${commentId}?productId=${productId}`);
export const updateComment = (data: object, idComment: string, productId: string) =>
  Service.put(`/v1/product-review/${idComment}?productId=${productId}`, data);
