import { AuthType } from 'src/containers/Authenticated/types';

export interface ProductCart {
  _id: string;
  quantity: number;
  product: {
    _id: string;
    images: string;
    name: string;
    price: number;
    slug: string;
  };
}

export type ProductList = ProductCart[];

export type Props = {
  auth: AuthType;
  productList: ProductList;
  onDeleteProduct: (id: string) => void;
};
