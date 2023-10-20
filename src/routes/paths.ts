export const PATH_AUTH = {
  login: '/auth/login',
  register: '/auth/register',
  profile: '/profile',
};

export const PATH_PUBLIC = {
  product: {
    index: '/product',
    slug: (slug: string, id?: string) => `/product/${slug}?id=${id}`,
    search: (value: string) => `/product/search/${value}`,
  },
};
