import Service from 'src/service';

export const getListOrder = (page: number) => Service.get(`/v1/orders?page=${page}`);
