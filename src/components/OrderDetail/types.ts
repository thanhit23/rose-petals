import { UseMutationResult } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

import { PostOrderDetailType, PostOrderType, UpdateOrderType } from 'src/common/types';
import { OrderDetailType } from 'src/containers/Order/types';

export type Props = {
  orderDetail: OrderDetailType;
  onUpdateOrder: UseMutationResult<any, unknown, UpdateOrderType, unknown>;
  onCreateOrder: UseMutationResult<AxiosResponse<any, any>, unknown, PostOrderType, unknown>;
  onReviewProduct: UseMutationResult<AxiosResponse<any, any>, unknown, object, unknown>;
  onCreateOrderDetail: UseMutationResult<AxiosResponse<any, any>, unknown, PostOrderDetailType, unknown>;
  isGetOrderDetailLoading: boolean;
};
