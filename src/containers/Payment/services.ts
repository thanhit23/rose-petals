import Service from '../../service';
import { PaymentType } from './types';

export const payWithVNPay = ({ address, ...data }: PaymentType) =>
  Service.post('/v1/payment/create', {
    shippingAddress: address,
    ...data,
  });
