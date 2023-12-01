export interface FilterProducts {
  price_min?: number;
  price_max?: number;
  rating_min?: number;
  rating_max?: number;
  brand?: string | null;
  category?: string | null;
}
