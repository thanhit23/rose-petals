import { UseMutationResult } from '@tanstack/react-query';

import { UpdateOrderType } from 'src/common/types';
import { OrderDetailType } from 'src/containers/Order/types';

export type Props = {
  orderDetail: OrderDetailType;
  onUpdateOrder: UseMutationResult<any, unknown, UpdateOrderType, unknown>;
};
