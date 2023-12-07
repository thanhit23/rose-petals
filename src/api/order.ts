import { PostOrderDetailType, PostOrderType, UpdateOrderType } from 'src/common/types';
import Service from 'src/service';

export const getListOrder = (page?: number) => Service.get(`/v1/orders${page ? `?page=${page}` : ''}`);
export const createOrder = (data: PostOrderType) => Service.post('/v1/orders', data);
export const createOrderDetail = (data: PostOrderDetailType) => Service.post('/v1/orders/detail', data);
export const cancelOrder = (id: string) => Service.delete(`v1/orders/${id}`);
export const getOrderDetail = (id: string) => Service.get(`/v1/orders/${id}/detail`);
export const updateOrder = ({ id, ...data }: UpdateOrderType) => Service.put(`/v1/orders/${id}`, data);
