import { CATEGORY_LIST, PRODUCT_CART_LIST } from './constant';
import { GetCategory, GetProductCart } from './types';

export const getCategoryAction = (data: []): GetCategory => ({
  type: CATEGORY_LIST,
  payload: { data },
});

export const getProductCartAction = (data: []): GetProductCart => ({
  type: PRODUCT_CART_LIST,
  payload: { data },
});
