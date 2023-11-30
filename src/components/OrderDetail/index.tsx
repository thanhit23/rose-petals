import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import DoneIcon from '@mui/icons-material/Done';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';
import { UseMutationResult } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { format } from 'date-fns';
import { compose } from 'redux';

import { PostOrderDetailType, PostOrderType, State } from 'src/common/types';
import { AuthType } from 'src/containers/Authenticated/types';
import { OrderDetailProduct, OrderDetailType } from 'src/containers/Order/types';

import HeaderHoldUser from '../HeaderHoldUser';
import { DELIVERED, DELIVERING, ORDERED } from '../ItemOrder/orderStatus';
import ModalConfirm from '../ModalConfirm';
import OrderSummaryDetails from '../OrderSummaryDetails';
import ProductItem from './ProductItem';
import { container, delivery, shipping } from './icons';
import messages from './messages';
import styles from './styles';

type Props = {
  auth: AuthType;
  orderDetail: OrderDetailType;
  onCreateOrder: UseMutationResult<AxiosResponse<any, any>, unknown, PostOrderType, unknown>;
  onReviewProduct: UseMutationResult<AxiosResponse<any, any>, unknown, object, unknown>;
  onCreateOrderDetail: UseMutationResult<AxiosResponse<any, any>, unknown, PostOrderDetailType, unknown>;
};

const OrderDetail: React.FC<Props> = ({ auth, orderDetail, onReviewProduct, onCreateOrder, onCreateOrderDetail }) => {
  const [modalConfirmOrder, setModalConfirmOrder] = useState(false);
  const orderId = useParams().id as string;

  const formatDate = (date: string) => {
    if (!date) return;

    const formattedDate = format(new Date(date), 'MMM d, yyyy');
    return formattedDate;
  };

  const renderDeliveryDate = (orderDate: string) => {
    if (!orderDate) return;

    const originalDate = new Date(orderDate);
    const newDate = new Date(originalDate);
    newDate.setDate(originalDate.getDate() + 5);

    const formattedDate = format(newDate, 'MMM d, yyyy');

    return formattedDate;
  };

  const renderStatus = (status: number) => {
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

  const handleOrderAgain = () => {
    const formData = {
      fullName: auth.name,
      phoneNumber: auth.phoneNumber.toString(),
      address: orderDetail.address,
      customerNote: orderDetail.customNote,
      amount: orderDetail.totalPrice,
      status: 1,
      quantity: orderDetail.products.length,
    };

    onCreateOrder.mutate(formData, {
      onSuccess: ({ data: { data, status, message } }) => {
        if (status) {
          onCreateOrderDetail.mutate({
            products: orderDetail.products?.map(product => ({
              product: product.product._id,
              quantity: product.quantity,
              price: product.price,
            })),
            order: data.id,
            shipingFee: 0,
            discountPercent: 0,
          });
        } else {
          toast.error(
            <>
              <FormattedMessage {...messages.orderAgainFailed} />: {message}
            </>,
          );
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
            renderStatus(orderDetail.status) === DELIVERED ? <FormattedMessage {...messages.orderAgain} /> : undefined
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
                backgroundColor: renderStatus(orderDetail.status) === DELIVERING ? '#D23F57' : '#E3E9EF',
              }}
            />
            <Box position="relative">
              <Avatar
                sx={{
                  ...styles.wrapperIcon,
                  backgroundColor: renderStatus(orderDetail.status) === DELIVERING ? '#D23F57' : '#E3E9EF',
                  color: renderStatus(orderDetail.status) === DELIVERING ? '#E3E9EF' : '#D23F57',
                }}
              >
                <SvgIcon viewBox="0 0 36 36" fontSize="medium">
                  {shipping}
                </SvgIcon>
              </Avatar>
              {renderStatus(orderDetail.status) === DELIVERING && <TickSuccess />}
            </Box>
            <Box
              sx={{
                ...styles.bridge,
                backgroundColor: renderStatus(orderDetail.status) === DELIVERED ? '#D23F57' : '#E3E9EF',
              }}
            />
            <Box position="relative">
              <Avatar
                sx={{
                  ...styles.wrapperIcon,
                  backgroundColor: renderStatus(orderDetail.status) === DELIVERED ? '#D23F57' : '#E3E9EF',
                  color: renderStatus(orderDetail.status) === DELIVERED ? '#E3E9EF' : '#D23F57',
                }}
              >
                <SvgIcon viewBox="0 0 32 32" fontSize="medium">
                  {delivery}
                </SvgIcon>
              </Avatar>
              {renderStatus(orderDetail.status) === DELIVERED && <TickSuccess />}
            </Box>
          </Box>
          <Box sx={styles.boxTimeShipping}>
            <Typography sx={styles.TypographyTimeShipping}>
              {renderStatus(orderDetail.status) === DELIVERED ? (
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
              <Typography sx={styles.boxTitleItemContent}>{renderStatus(orderDetail.status)}</Typography>
            </Box>
          </Paper>
          <Box sx={styles.containerProduct}>
            {orderDetail.products?.map((product: OrderDetailProduct) => (
              <ProductItem key={product._id} product={product} onReviewProduct={onReviewProduct} />
            ))}
          </Box>
        </Paper>
        <Grid container spacing={{ xs: 3 }}>
          <OrderSummaryDetails orderDetail={orderDetail} />
        </Grid>
      </Grid>
      <ModalConfirm
        content="Order again this product"
        openModal={modalConfirmOrder}
        handleCloseModal={() => setModalConfirmOrder(false)}
        onConfirm={() => handleOrderAgain()}
      />
    </React.Fragment>
  );
};

const mapStateToProps = ({ global: { auth } }: State) => ({
  auth,
});

const withConnect = connect(mapStateToProps, null);

export default compose(withConnect)(OrderDetail);
