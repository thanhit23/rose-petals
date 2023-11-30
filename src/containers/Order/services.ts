import Service from 'src/service';

export const getOrderDetail = (id: string) => Service.get(`/v1/orders/${id}/detail`);
