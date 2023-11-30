import { PostOrderDetailType, PostOrderType } from 'src/common/types';
import Service from 'src/service';

export const getListOrder = (page?: number) => Service.get(`/v1/orders${page ? `?page=${page}` : ''}`);
export const createOrder = (data: PostOrderType) => Service.post('/v1/orders', data);
export const createOrderDetail = (data: PostOrderDetailType) => Service.post('/v1/orders/detail', data);
