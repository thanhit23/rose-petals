import { useMemo } from 'react';

import { OrderType } from 'src/common/types';

function useGetOrdersPaid(orders: OrderType[]) {
  const ordersPaid = useMemo(() => orders?.filter((order: OrderType) => !!order.methodPayment), [orders]);
  return ordersPaid;
}

export default useGetOrdersPaid;
