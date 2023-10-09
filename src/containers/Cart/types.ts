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
  productList: ProductList;
};

export interface State {
  global: {
    product: {
      cart: {
        list: ProductList;
      };
      detail: object;
    };
  };
}
