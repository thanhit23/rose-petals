import { UseMutationOptions, UseQueryOptions, useMutation, useQuery } from '@tanstack/react-query';

import { createOrder, createOrderDetail, getListOrder, updateOrder } from 'src/api/order';
import { PostOrderDetailType, PostOrderType, UpdateOrderType } from 'src/common/types';

export const useGetListOrder = <T = any>(params?: number, options: UseQueryOptions<any, unknown, T> = {}) =>
  useQuery({
    queryKey: ['getListOrder', params],
    staleTime: 1000 * 60,
    queryFn: async () => {
      const {
        data: { status, data, meta },
      } = await getListOrder(params);

      return { status, data, meta };
    },
    ...options,
  });

export const useCreateOrder = (options: UseMutationOptions<any, unknown, PostOrderType> = {}) =>
  useMutation({
    mutationFn: variables => createOrder(variables),
    ...options,
  });

export const useCreateOrderDetail = (options: UseMutationOptions<any, unknown, PostOrderDetailType> = {}) =>
  useMutation({
    mutationFn: variables => createOrderDetail(variables),
    ...options,
  });

export const useUpdateOrder = (options: UseMutationOptions<any, unknown, UpdateOrderType> = {}) =>
  useMutation({
    mutationFn: variables => updateOrder(variables),
    ...options,
  });
