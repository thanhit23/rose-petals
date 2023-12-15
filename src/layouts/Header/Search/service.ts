import Service from 'src/service';

export const getSearchResult = (searchValue: string, categoryId?: string) =>
  Service.get(`v1/products?limit=6&name=${searchValue}${categoryId && `&category=${categoryId}`}`);
