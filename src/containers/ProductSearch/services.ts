import Service from '../../service';
import { FilterProducts } from './types';

export const getFilterProducts = (params: FilterProducts) => Service.get('/v1/products?limit=9', params);
