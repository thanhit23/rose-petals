import toast from 'react-hot-toast';
import { FormattedMessage } from 'react-intl';
import { useNavigate, useParams } from 'react-router-dom';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useMutation, useQuery } from '@tanstack/react-query';

import OrderDetailComponent from 'src/components/OrderDetail';
import SideBarUser from 'src/components/SideBarUser';
import { createComment } from 'src/containers/ProductDetail/services';
import { useCreateOrder, useCreateOrderDetail } from 'src/queries/order';
import { PATH_AUTH } from 'src/routes/paths';

import messages from '../messages';
import { getOrderDetail } from '../services';

function OrderDetail() {
  const orderId = useParams().id as string;
  const navigate = useNavigate();

  const { data: orderDetail = {} } = useQuery({
    queryKey: ['getOrderDetail', orderId],
    queryFn: () => getOrderDetail(orderId),
    enabled: !!orderId,
    select: ({ data: { data } }) => data,
  });

  const reviewProduct = useMutation({
    mutationFn: (data: object) => createComment(data),
  });

  const createOrderDetail = useCreateOrderDetail({
    onSuccess: ({ data: { status, message } }) => {
      if (status) {
        toast.success(<FormattedMessage {...messages.orderSuccessMessage} />);
        navigate(PATH_AUTH.order.index);
      } else {
        toast.error(
          <>
            <FormattedMessage {...messages.orderFailedMessage} />: {message}
          </>,
        );
      }
    },
  });

  const createOrder = useCreateOrder();

  return (
    <Container maxWidth="lg" sx={{ margin: '2rem auto' }}>
      <Grid container spacing={{ xs: 3 }}>
        <SideBarUser />
        <OrderDetailComponent
          orderDetail={orderDetail}
          onCreateOrder={createOrder}
          onReviewProduct={reviewProduct}
          onCreateOrderDetail={createOrderDetail}
        />
      </Grid>
    </Container>
  );
}

export const Component = OrderDetail;
