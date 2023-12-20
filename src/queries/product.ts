import { UseQueryOptions, useQuery } from '@tanstack/react-query';

import { getProduct, getProductDetail } from 'src/api/product';
import { Product } from 'src/common/types';

export const useGetProductDetail = <T = Product>(params: string, options: UseQueryOptions<Product, unknown, T> = {}) =>
  useQuery({
    queryKey: ['getProductDetail', params],
    staleTime: 1000 * 60,
    queryFn: async () => {
      const { data } = await getProductDetail(params);

      return data.data;
    },
    ...options,
  });

export const useGetProduct = <T = Product>(params: any, options: UseQueryOptions<Product, unknown, T> = {}) =>
  useQuery({
    queryKey: ['getProductDetail', params],
    staleTime: 1000 * 60,
    queryFn: async () => {
      const { data } = await getProduct(params);

      return data.data;
    },
    ...options,
  });
