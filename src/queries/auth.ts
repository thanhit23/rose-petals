import { UseMutationOptions, useMutation } from '@tanstack/react-query';

import { login } from 'src/containers/Login/services';

type ClientLogin = {
  email: string;
  password: string;
};

export const useClientLogin = (options: UseMutationOptions<any, unknown, ClientLogin> = {}) =>
  useMutation({
    mutationFn: async variables => {
      const { data } = await login(variables);

      return data;
    },
    ...options,
  });
