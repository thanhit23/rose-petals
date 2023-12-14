export interface FilterProducts {
  price_min?: string;
  price_max?: string;
  rating_min?: number;
  rating_max?: number;
  brand?: string | null;
  category?: string | null;
  page: number;
}
