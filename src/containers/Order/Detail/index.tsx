import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { FormattedMessage } from 'react-intl';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

import { CircularProgress } from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import _ from 'lodash';

import { cancelOrder, getOrderDetail } from 'src/api/order';
import OrderDetailComponent from 'src/components/OrderDetail';
import SideBarUser from 'src/components/SideBarUser';
import { createComment } from 'src/containers/ProductDetail/services';
import { useCreateOrder, useCreateOrderDetail, useUpdateOrder } from 'src/queries/order';
import { PATH_AUTH } from 'src/routes/paths';

import messages from '../messages';

function OrderDetail() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const transactionStatus = searchParams.get('vnp_TransactionStatus');

  const orderId = useParams().id as string;

  const queryClient = useQueryClient();

  const { data: orderDetail = {}, isLoading } = useQuery({
    queryKey: ['getOrderDetail', orderId],
    queryFn: () => getOrderDetail(orderId),
    enabled: !!orderId,
    select: ({ data: { data } }) => data,
  });

  const reviewProduct = useMutation({
    mutationFn: (data: object) => createComment(data),
  });

  const cancelOrderMutation = useMutation({
    mutationFn: (id: string) => cancelOrder(id),
  });

  const createOrder = useCreateOrder();

  const createOrderDetail = useCreateOrderDetail();

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
    if (transactionStatus === '00' && _.size(orderDetail) > 0) {
      toast.success(<FormattedMessage {...messages.paymentSuccessMessage} />);
      updateOrder.mutate({
        id: orderId,
        address: orderDetail.address,
        amount: orderDetail.totalPrice,
        quantity: _.size(orderDetail.products),
        status: orderDetail.status,
        methodPayment: 2,
      });
      navigate(PATH_AUTH.order.id(orderId));
    }
  }, [transactionStatus, _.size(orderDetail)]);

  return (
    <Container maxWidth="lg" sx={{ margin: '2rem auto' }}>
      <Grid container spacing={{ xs: 3 }}>
        <SideBarUser />
        {isLoading ? (
          <CircularProgress style={{ margin: 'auto' }} />
        ) : (
          <OrderDetailComponent
            orderDetail={orderDetail}
            onCreateOrder={createOrder}
            onReviewProduct={reviewProduct}
            onCreateOrderDetail={createOrderDetail}
            onCancelOrder={cancelOrderMutation}
          />
        )}
      </Grid>
    </Container>
  );
}

export const Component = OrderDetail;
