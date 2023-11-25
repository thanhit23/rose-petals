import { AuthType } from 'src/containers/Authenticated/types';

export interface ReviewSubmitForm {
  content: string;
}

interface User {
  _id: string;
  name: string;
}
interface Product {
  _id: string;
  name: string;
  thumbnail: string;
}
export interface ProductReviewType {
  _id: string;
  content: string;
  createAt: string;
  product: Product;
  rating: number;
  updateAt: string;
  user: User;
}

export interface ReviewTypes {
  listProductReview: ProductReviewType[];
  onCreateComment: (data: object) => void;
  onUpdateComment: (data: object) => void;
  totalPage: number;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  isFetching: boolean;
  auth: AuthType;
  onDeleteComment: (id: string) => void;
  setIdComment: React.Dispatch<React.SetStateAction<string>>;
  idComment: string;
}
