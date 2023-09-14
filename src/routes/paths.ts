export const PATH_AUTH = {
  login: '/auth/login',
  register: '/auth/register',
};

export const PATH_PUBLIC = {
  product: {
    index: '/product',
    slug: (slug: string) => `/product/${slug}`,
    search: (value: string) => `/product/search/${value}`,
  },
};
