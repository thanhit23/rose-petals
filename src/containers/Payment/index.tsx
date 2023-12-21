import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import Container from '@mui/material/Container';
import Gird from '@mui/material/Grid';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { compose } from 'redux';

import { getOrderDetail } from 'src/api/order';
import { State } from 'src/common/types';
import DeliveryMethod from 'src/components/DeliveryMethod';
import FormSteps from 'src/components/FormSteps';
import PaymentSummary from 'src/components/PaymentSummary';
import useLocalStorage from 'src/hooks/useLocalStorage';
import { useUpdateOrder } from 'src/queries/order';

import { ProductCart, ProductList } from '../Cart/types';
import messages from './messages';
import { payWithVNPay } from './services';
import { PaymentType } from './types';

type Props = {
  productList: ProductList;
};

const Payment: React.FC<Props> = ({ productList }) => {
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get('id') as string;
  const [storedValue] = useLocalStorage<string[]>('productCartId', []);
  const [productCartList, setProductCartList] = useState<ProductCart[]>([]);

  const queryClient = useQueryClient();

  const { data: orderDetail = {} } = useQuery({
    queryKey: ['getOrderDetail', orderId],
    queryFn: () => getOrderDetail(orderId),
    enabled: !!orderId,
    select: ({ data: { data } }) => data,
  });

  const continueWithVNPay = useMutation({
    mutationFn: (data: PaymentType) => payWithVNPay(data),
    onSuccess: ({ data: { data, status } }) => {
      if (status) {
        window.open(data.url, '_blank');
      } else {
        toast.error(<FormattedMessage {...messages.paymentFailedMessage} />);
      }
    },
  });

  const updateOrder = useUpdateOrder({
    onSuccess: async ({ data: { status } }) => {
      if (status) {
        await queryClient.invalidateQueries({
          queryKey: ['getOrderDetail'],
        });
        await queryClient.invalidateQueries({
          queryKey: ['getListOrder'],
        });
      }
    },
  });

  useEffect(() => {
    const filterProductCart = productList.filter(product => storedValue.includes(product._id));
    setProductCartList(filterProductCart);
  }, [productList]);

  return (
    <Container maxWidth="lg" sx={{ margin: '32px auto' }}>
      <FormSteps activeIndexPage={3} />
      <Gird container spacing={{ xs: 3 }}>
        <Gird item xs={12} md={8} lg={8}>
          <DeliveryMethod onPayWithVNPay={continueWithVNPay} orderDetail={orderDetail} onUpdateOrder={updateOrder} />
        </Gird>
        <Gird item xs={12} md={4} lg={4}>
          <PaymentSummary productList={productCartList} />
        </Gird>
      </Gird>
    </Container>
  );
};

const mapStateToProps = ({
  global: {
    product: {
      cart: { list },
    },
  },
}: State) => ({
  productList: list,
});

const withConnect = connect(mapStateToProps, null);

export const Component = compose(withConnect)(Payment);
