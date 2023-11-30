import { ProductCart } from 'src/components/SideBarCart/types';
import { AuthType } from 'src/containers/Authenticated/types';

export type Nullable<T> = Partial<T | null>;

export type MapAction<A, K = keyof A> = K extends keyof A
  ? [A[K]] extends [never]
    ? { type: K }
    : { type: K; payload: A[K] }
  : never;

export type State = {
  global: {
    locale: string;
    auth: AuthType;
    loading: {
      showLoading: false;
    };
    category: { list: ListCategory[] };
    product: {
      cart: {
        list: ProductCart[];
      };
      detail: object;
    };
  };
};

export type Product = {
  _id: string;
  name: string;
  price: number;
  slug: string;
  brand: {
    id: string;
    name: string;
  };
  category: {
    _id: string;
    name: string;
  };
  description?: string;
  images?: string[];
  star?: number;
  review?: number;
  thumbnail?: string;
  rating?: string;
  createdAt?: string;
  deletedAt?: string;
  updatedAt?: string;
};

export type Brand = {
  _id: string;
  logo: string;
  name: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
};

export type ListCategory = {
  name: string;
  slug: string;
  id: string;
};

export type AddToCartProduct = {
  productId: string;
  quantity: number;
  size: string;
  color: string;
};

export type UpdateQuantityProduct = {
  id: string;
  quantity: string;
};

export type PostOrderType = {
  fullName: string;
  phoneNumber: string;
  address: string;
  customerNote?: string;
  status: number;
  amount: number;
  quantity: number;
};

export type PostOrderDetailType = {
  products: {
    product: string;
    quantity: number;
    price: number;
  }[];
  order: string;
  discountPercent?: number;
  shipingFee?: number;
};
