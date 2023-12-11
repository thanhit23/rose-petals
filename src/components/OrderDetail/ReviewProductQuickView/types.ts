import { UseMutationResult } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

import { OrderDetailProduct } from 'src/containers/Order/types';

export type Props = {
  product: OrderDetailProduct;
  openModal: boolean;
  handleCloseModal: () => void;
  onReviewProduct: UseMutationResult<AxiosResponse<any, any>, unknown, object, unknown>;
};
