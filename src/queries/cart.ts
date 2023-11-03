import { UseMutationOptions, useMutation } from '@tanstack/react-query';

import { addToCart, updateQuantityProductCart } from 'src/api/cart';
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
