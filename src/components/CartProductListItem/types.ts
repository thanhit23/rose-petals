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
