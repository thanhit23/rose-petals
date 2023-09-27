interface Images {
  fullUrl: string;
  path: string;
}

interface TypeBrandCategory {
  id: string;
  name: string;
}

export interface Product {
  brand: TypeBrandCategory;
  category: TypeBrandCategory;
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

export interface ProductProps {
  product: Product;
}
export interface ImageProps {
  images: Images[];
}
