import { UseMutationResult } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

import { OrderDetailType } from 'src/containers/Order/types';

export type Props = {
  orderDetail: OrderDetailType;
  onCancelOrder: UseMutationResult<AxiosResponse<any, any>, unknown, string, unknown>;
};
