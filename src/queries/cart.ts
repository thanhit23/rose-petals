import { UseMutationOptions, useMutation } from '@tanstack/react-query';

import { addToCart } from 'src/api/cart';
import { AddToCartProduct } from 'src/common/types';

export const useAddToCart = (options: UseMutationOptions<any, unknown, AddToCartProduct> = {}) =>
  useMutation({
    mutationFn: variables => addToCart(variables),
    ...options,
  });
