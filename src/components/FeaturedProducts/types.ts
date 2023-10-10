interface Images {
  fullUrl: string;
  path: string;
}

interface TypeBrandCategory {
  id: string;
  name: string;
}

export interface FeaturedProduct {
  thumbnail: string;
  brand: TypeBrandCategory;
  category: TypeBrandCategory;
  createdAt: string;
  deletedAt: string;
  description: string;
  images: Images[];
  name: string;
  rating: number;
  price: number;
  slug: string;
  updatedAt: string;
  _id: string;
}

export interface Props {
  listFeatureProduct: FeaturedProduct[];
}
