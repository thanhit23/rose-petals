import Service from '../../service';

export const getFilterProducts = (
  priceMin?: number,
  priceMax?: number,
  ratingMin?: number,
  ratingMax?: number,
  brand?: string,
) =>
  Service.get(
    `/v1/products?price_min=${priceMin}&price_max=${priceMax}&rating_min=${ratingMin}&rating_max=${ratingMax}`,
  );
