export interface SubmitForm {
  searchValue: string;
}

export interface Product {
  _id: string;
  brand: object;
  category: object;
  createdAt: string;
  deletedAt: null | string;
  description: string;
  name: string;
  price: number;
  slug: string;
  thumbnail: string;
  updatedAt: string;
}
