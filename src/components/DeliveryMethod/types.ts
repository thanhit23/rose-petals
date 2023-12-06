import { UseMutationResult } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

import { UpdateOrderType } from 'src/common/types';
import { OrderDetailType } from 'src/containers/Order/types';
import { PaymentType } from 'src/containers/Payment/types';

export type Props = {
  orderDetail: OrderDetailType;
  onUpdateOrder: UseMutationResult<AxiosResponse<any, any>, unknown, UpdateOrderType, unknown>;
  onPayWithVNPay: UseMutationResult<AxiosResponse<any, any>, unknown, PaymentType, unknown>;
};
