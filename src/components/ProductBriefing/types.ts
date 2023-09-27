export interface Images {
  fullUrl: string;
  path: string;
}

interface Brand {
  id: string;
  name: string;
}
interface Category {
  id: string;
  name: string;
}

export interface Product {
  brand: Brand;
  category: Category;
  createdAt: string;
  deletedAt: string;
  description: string;
  images: Images[];
  name: string;
  price: number;
  slug: string;
  updatedAt: string;
  _id: string;
}
