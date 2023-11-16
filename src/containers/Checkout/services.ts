import axios from 'axios';

import Service from 'src/service';

import { OrderDetailType, OrderType } from './types';

const BASE_URL = 'https://vapi.vnappmob.com/api';

export const getAddress = (endpoint: string) => axios.get(`${BASE_URL}${endpoint}`);
export const postOrder = (data: OrderType) => Service.post('/v1/orders', data);
export const postOrderDetail = (data: OrderDetailType) => Service.post('/v1/orders/detail', data);
