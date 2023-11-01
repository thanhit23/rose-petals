import { AddToCartProduct } from 'src/common/types';
import Service from 'src/service';

export const addToCart = (data: AddToCartProduct) => Service.post('/v1/carts', data);
