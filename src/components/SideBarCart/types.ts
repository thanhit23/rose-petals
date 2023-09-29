import { AuthType } from 'src/containers/Authenticated/types';

export interface ProductCart {
  _id: string;
  product: {
    _id: string;
    images: string;
    name: string;
    price: number;
    slug: string;
  };
  quantity: number;
}

export type ProductList = ProductCart[];

export type Props = {
  auth: AuthType;
  productList: ProductList;
};

export interface State {
  global: {
    auth: AuthType;
    product: {
      cart: {
        list: ProductList;
      };
      detail: object;
    };
  };
}
