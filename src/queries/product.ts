import { UseQueryOptions, useQuery } from '@tanstack/react-query';

import { getProductDetail } from 'src/api/product';
import { Product } from 'src/common/types';

export const useGetProductDetail = <T = Product>(params: string, options: UseQueryOptions<Product, unknown, T> = {}) =>
  useQuery({
    staleTime: 1000 * 60,
    queryFn: async () => {
      const { data } = await getProductDetail(params);

      return data;
    },
    ...options,
  });
