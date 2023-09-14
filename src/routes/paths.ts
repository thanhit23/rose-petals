export const PATH_AUTH = {
  login: '/auth/login',
  register: '/auth/register',
};

export const PATH_PUBLIC = {
  product: {
    search: (value: string) => `/product/search/${value}`,
  },
};
