import { AddToCartProduct, UpdateQuantityProduct } from 'src/common/types';
import Service from 'src/service';

export const addToCart = (data: AddToCartProduct) => Service.post('/v1/carts', data);
export const updateQuantityProductCart = ({ id, ...data }: UpdateQuantityProduct) =>
  Service.put(`/v1/carts/${id}`, data);
export const deleteProductCart = (id: string) => Service.delete(`/v1/carts/${id}`);
