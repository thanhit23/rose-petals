import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { FormattedMessage } from 'react-intl';
import { useNavigate, useParams } from 'react-router-dom';

import DoneIcon from '@mui/icons-material/Done';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';
import { format } from 'date-fns';
import _ from 'lodash';

import { PostOrderDetailType, PostOrderType } from 'src/common/types';
import { OrderDetailProduct } from 'src/containers/Order/types';
import { formatDate } from 'src/helpers';
import { PATH_AUTH } from 'src/routes/paths';

import HeaderHoldUser from '../HeaderHoldUser';
import { DELIVERED, DELIVERING, ORDERED } from '../ItemOrder/orderStatus';
import ModalConfirm from '../ModalConfirm';
import OrderSummaryDetails from '../OrderSummaryDetails';
import ProductItem from './ProductItem';
import { container, delivery, shipping } from './icons';
import messages from './messages';
import styles from './styles';
import { Props } from './types';

const OrderDetail: React.FC<Props> = ({
  orderDetail,
  onReviewProduct,
  onCreateOrder,
  onCreateOrderDetail,
  onCancelOrder,
}) => {
  const navigate = useNavigate();
  const orderId = useParams().id as string;
  const [modalConfirmOrder, setModalConfirmOrder] = useState(false);

  const renderDeliveryDate = (orderDate: string) => {
    if (!orderDate) return;

    const originalDate = new Date(orderDate);
    const newDate = new Date(originalDate);
    newDate.setDate(originalDate.getDate() + 5);

    const formattedDate = format(newDate, 'MMM d, yyyy');

    return formattedDate;
  };

  const checkStatus = (status: number) => {
    if (status === 1) {
      return ORDERED;
    } else if (status === 2) {
      return DELIVERING;
    } else if (status === 3) {
      return DELIVERED;
    }
  };

  const TickSuccess = () => (
    <Box sx={styles.wrapperDoneIcon}>
      <Avatar sx={styles.boxDoneIcon}>
        <DoneIcon />
      </Avatar>
    </Box>
  );

  const createOrderDetailData = (productList: any, orderId: string): PostOrderDetailType => ({
    products: productList?.map((product: any) => ({
      product: product.product._id,
      quantity: product.quantity,
      price: product.price,
    })),
    order: orderId,
    shipingFee: 0,
    discountPercent: 0,
  });

  const onSuccessOrderDetail = (response: { data: { status: boolean } }, data: { id: string }): void => {
    if (response.data.status) {
      navigate(PATH_AUTH.payment.id(data.id));
    } else {
      toast.error(<FormattedMessage {...messages.orderAgainFailed} />);
    }
  };

  const handleOrderAgain = () => {
    const orderFormData: PostOrderType = {
      fullName: orderDetail.fullName,
      phoneNumber: orderDetail.phoneNumber.toString(),
      address: orderDetail.address,
      customerNote: orderDetail.customerNote,
      amount: orderDetail.totalPrice,
      status: 1,
      quantity: _.size(orderDetail.products),
    };

    onCreateOrder.mutate(orderFormData, {
      onSuccess: ({ data: { data, status } }) => {
        if (status) {
          const orderDetailData = createOrderDetailData(orderDetail.products, data.id);

          onCreateOrderDetail.mutate(orderDetailData, {
            onSuccess: response => onSuccessOrderDetail(response, data),
          });
        } else {
          toast.error(<FormattedMessage {...messages.orderAgainFailed} />);
        }
      },
    });
  };

  return (
    <React.Fragment>
      <Grid item xs={12} lg={9}>
        <HeaderHoldUser
          icon={<ShoppingBagIcon fontSize="medium" />}
          title={<FormattedMessage {...messages.title} />}
          button={
            checkStatus(orderDetail.status) === DELIVERED || !orderDetail.methodPayment ? (
              <FormattedMessage {...messages.orderAgain} />
            ) : undefined
          }
          loadingButton={onCreateOrder.isLoading || onCreateOrderDetail.isLoading}
          onClickButton={() => setModalConfirmOrder(true)}
        />
        <Paper elevation={1} sx={styles.paperFormStep}>
          <Box sx={styles.boxFormStep}>
            <Box position="relative">
              <Avatar sx={styles.wrapperIcon}>
                <SvgIcon viewBox="0 0 32 32" fontSize="medium">
                  {container}
                </SvgIcon>
              </Avatar>
              <TickSuccess />
            </Box>
            <Box
              sx={{
                ...styles.bridge,
                backgroundColor: checkStatus(orderDetail.status) === DELIVERING ? '#D23F57' : '#E3E9EF',
              }}
            />
            <Box position="relative">
              <Avatar
                sx={{
                  ...styles.wrapperIcon,
                  backgroundColor: checkStatus(orderDetail.status) === DELIVERING ? '#D23F57' : '#E3E9EF',
                  color: checkStatus(orderDetail.status) === DELIVERING ? '#E3E9EF' : '#D23F57',
                }}
              >
                <SvgIcon viewBox="0 0 36 36" fontSize="medium">
                  {shipping}
                </SvgIcon>
              </Avatar>
              {checkStatus(orderDetail.status) === DELIVERING && <TickSuccess />}
            </Box>
            <Box
              sx={{
                ...styles.bridge,
                backgroundColor: checkStatus(orderDetail.status) === DELIVERED ? '#D23F57' : '#E3E9EF',
              }}
            />
            <Box position="relative">
              <Avatar
                sx={{
                  ...styles.wrapperIcon,
                  backgroundColor: checkStatus(orderDetail.status) === DELIVERED ? '#D23F57' : '#E3E9EF',
                  color: checkStatus(orderDetail.status) === DELIVERED ? '#E3E9EF' : '#D23F57',
                }}
              >
                <SvgIcon viewBox="0 0 32 32" fontSize="medium">
                  {delivery}
                </SvgIcon>
              </Avatar>
              {checkStatus(orderDetail.status) === DELIVERED && <TickSuccess />}
            </Box>
          </Box>
          <Box sx={styles.boxTimeShipping}>
            <Typography sx={styles.TypographyTimeShipping}>
              {checkStatus(orderDetail.status) === DELIVERED ? (
                <FormattedMessage {...messages.delivered} />
              ) : (
                <>
                  <FormattedMessage {...messages.estimatedDeliveryDate} />
                  <b> {renderDeliveryDate(orderDetail.createdAt)}</b>
                </>
              )}
            </Typography>
          </Box>
        </Paper>
        <Paper sx={styles.paperList}>
          <Paper sx={styles.paperHeader}>
            <Box sx={styles.boxTitleHeader}>
              <Typography sx={styles.boxTitleItem}>
                <FormattedMessage {...messages.orderID} />
              </Typography>
              <Typography sx={styles.boxTitleItemContent}>{orderId}</Typography>
            </Box>
            <Box sx={styles.boxTitleHeader}>
              <Typography sx={styles.boxTitleItem}>
                <FormattedMessage {...messages.placedOn} />
              </Typography>
              <Typography sx={styles.boxTitleItemContent}>{formatDate(orderDetail.createdAt)}</Typography>
            </Box>
            <Box sx={styles.boxTitleHeader}>
              <Typography sx={styles.boxTitleItem}>
                <FormattedMessage {...messages.deliveringStatus} />
              </Typography>
              <Typography sx={styles.boxTitleItemContent}>{checkStatus(orderDetail.status)}</Typography>
            </Box>
          </Paper>
          <Box sx={styles.containerProduct}>
            {orderDetail.products?.map((product: OrderDetailProduct) => (
              <ProductItem key={product._id} product={product} onReviewProduct={onReviewProduct} />
            ))}
          </Box>
        </Paper>
        <Grid container spacing={{ xs: 3 }}>
          <OrderSummaryDetails orderDetail={orderDetail} onCancelOrder={onCancelOrder} />
        </Grid>
      </Grid>
      <ModalConfirm
        content={<FormattedMessage {...messages.reOrderThisOrder} />}
        openModal={modalConfirmOrder}
        handleCloseModal={() => setModalConfirmOrder(false)}
        onConfirm={() => handleOrderAgain()}
      />
    </React.Fragment>
  );
};

export default OrderDetail;
