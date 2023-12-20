export interface FilterProducts {
  name: string | null;
  price_min: string;
  price_max: string;
  rating_min: number;
  rating_max: number;
  brand: string | null;
  category: string | null;
  page: number;
  best_selling: boolean;
}
