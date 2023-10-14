import { ImageProduct } from 'src/components/ProductBriefing/types';
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
    id: string;
    name: string;
  };
  description?: string;
  images?: ImageProduct[];
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
