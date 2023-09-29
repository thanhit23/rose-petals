import { CATEGORY_LIST, PRODUCT_CART_LIST } from './constant';

export interface CategoryListPayload {
  data: [];
}

export interface ProductCartListPayload {
  data: [];
}

export interface GetCategory {
  type: typeof CATEGORY_LIST;
  payload: CategoryListPayload;
}

export interface GetProductCart {
  type: typeof PRODUCT_CART_LIST;
  payload: ProductCartListPayload;
}

export interface listCategoryType {
  name: string;
  slug: string;
  id: string;
}

export type Props = {
  categoryList: listCategoryType[];
};

export interface State {
  global: {
    categoryList: listCategoryType[];
  };
}
