export const PATH_AUTH = {
  login: '/auth/login',
  register: '/auth/register',
  resetPassword: '/auth/reset-password',
  profile: '/profile',
  payment: '/payment',
  checkout: '/checkout',
  cart: '/cart',
};

export const PATH_PUBLIC = {
  product: {
    index: '/product',
    slug: (slug: string, id?: string) => `/product/${slug}?id=${id}`,
    search: (value: string) => `/product/search/${value}`,
  },
};
