import { UseMutationOptions, useMutation } from '@tanstack/react-query';

import { addToCart, deleteProductCart, updateQuantityProductCart } from 'src/api/cart';
import { AddToCartProduct, UpdateQuantityProduct } from 'src/common/types';

export const useAddToCart = (options: UseMutationOptions<any, unknown, AddToCartProduct> = {}) =>
  useMutation({
    mutationFn: variables => addToCart(variables),
    ...options,
  });

export const useUpdateQuantityProduct = (options: UseMutationOptions<any, unknown, UpdateQuantityProduct> = {}) =>
  useMutation({
    mutationFn: variables => updateQuantityProductCart(variables),
    ...options,
  });

export const useDeleteProductCart = (options: UseMutationOptions<any, unknown, string> = {}) =>
  useMutation({
    mutationFn: variables => deleteProductCart(variables),
    ...options,
  });
