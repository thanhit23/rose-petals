import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { FormattedMessage } from 'react-intl';
import { useParams } from 'react-router-dom';

import { LoadingButton } from '@mui/lab';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { size } from 'lodash';

import { formatPrice } from 'src/helpers';
import cashOnDelivery from 'src/resources/images/cashOnDelivery.png';
import paypal from 'src/resources/images/paypal.png';
import vnpay from 'src/resources/images/vnpay.png';

import { CANCELLED, DELIVERED, DELIVERING, ORDERED } from '../ItemOrder/orderStatus';
import ModalConfirm from '../ModalConfirm';
import messages from './messages';
import styles from './styles';
import { Props } from './types';

const OrderSummaryDetails: React.FC<Props> = ({ orderDetail, onUpdateOrder }) => {
  const orderId = useParams().id as string;
  const [modalConfirmCancelOrder, setModalConfirmCancelOrder] = useState(false);

  const renderDiscountPrice = (): number => orderDetail.subtotal * (orderDetail.discountPercent / 100);
  const renderAddress = (address: string, customerNote: string) =>
    customerNote ? `${address}, ${customerNote}` : address;

  const handleCancelOrder = () => {
    onUpdateOrder.mutate(
      {
        id: orderId,
        address: orderDetail.address,
        amount: orderDetail.totalPrice,
        quantity: size(orderDetail.products),
        status: 0,
        methodPayment: +orderDetail.methodPayment,
      },
      {
        onSuccess: async ({ data: { status } }) => {
          if (status) {
            toast.success(<FormattedMessage {...messages.cancelOrderSuccess} />);
          } else {
            toast.error(<FormattedMessage {...messages.cancelOrderFailed} />);
          }
        },
      },
    );
  };

  const checkStatus = (status: number) => {
    if (status === 0) {
      return CANCELLED;
    } else if (status === 1) {
      return ORDERED;
    } else if (status === 2) {
      return DELIVERING;
    } else if (status === 3) {
      return DELIVERED;
    }
  };

  const checkMethodPayment = (methodPayment: number) => {
    if (methodPayment === 1) {
      return cashOnDelivery;
    } else if (methodPayment === 2) {
      return vnpay;
    } else if (methodPayment === 3) {
      return paypal;
    }
  };

  return (
    <React.Fragment>
      <Grid item xs={12} md={6} lg={6} paddingLeft="24px" paddingTop="24px">
        <Paper sx={styles.paperAddress}>
          <Box component="h5" sx={styles.boxAddressTitle}>
            <FormattedMessage {...messages.shippingAddress} />
          </Box>
          <Box component="p" sx={styles.boxAddress}>
            {renderAddress(orderDetail.address, orderDetail.customerNote)}
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={6} paddingLeft="24px" paddingTop="24px">
        <Paper sx={styles.paperSummary}>
          <Box component="h5" sx={styles.boxTotalSummary}>
            <FormattedMessage {...messages.totalSummary} />
          </Box>
          <Box sx={styles.boxTitle}>
            <Typography sx={styles.titleSummary}>
              <FormattedMessage {...messages.subtotal} />
            </Typography>
            <Box component="h6" sx={styles.priceSummary}>
              {formatPrice.format(orderDetail.subtotal || 0)}
            </Box>
          </Box>
          <Box sx={styles.boxTitle}>
            <Typography sx={styles.titleSummary}>
              <FormattedMessage {...messages.shippingFee} />
            </Typography>
            <Box component="h6" sx={styles.priceSummary}>
              {formatPrice.format(orderDetail.shipingFee || 0)}
            </Box>
          </Box>
          <Box sx={styles.boxTitle}>
            <Typography sx={styles.titleSummary}>
              <FormattedMessage {...messages.discount} />
            </Typography>
            <Box component="h6" sx={styles.priceSummary}>
              {formatPrice.format(renderDiscountPrice() || 0)}
            </Box>
          </Box>
          <Divider sx={styles.divider} />
          <Box sx={{ ...styles.boxTitle, marginBottom: '16px' }}>
            <Box component="h6" sx={styles.priceSummary}>
              <FormattedMessage {...messages.total} />
            </Box>
            <Box component="h6" sx={styles.priceSummary}>
              {formatPrice.format(orderDetail.totalPrice || 0)}
            </Box>
          </Box>
          <Typography sx={styles.paymentMethod}>
            {!!orderDetail.methodPayment && (
              <React.Fragment>
                <FormattedMessage {...messages.paymentMethod} />
                <Box
                  component={'img'}
                  src={checkMethodPayment(+orderDetail.methodPayment)}
                  alt="Payment method"
                  sx={styles.boxImgPaidCard}
                />
              </React.Fragment>
            )}
            {!orderDetail.methodPayment && (
              <Box component={'p'} style={{ color: '#f44336' }}>
                <FormattedMessage {...messages.unPaidMessage} />
              </Box>
            )}
          </Typography>
          <LoadingButton
            disabled={!(checkStatus(orderDetail.status) === ORDERED)}
            loading={onUpdateOrder.isLoading}
            type="submit"
            variant="contained"
            sx={styles.btnCancelOrder}
            onClick={() => setModalConfirmCancelOrder(true)}
          >
            <FormattedMessage {...messages.btnCancelOrder} />
          </LoadingButton>
        </Paper>
      </Grid>
      <ModalConfirm
        content={<FormattedMessage {...messages.cancelThisOrder} />}
        openModal={modalConfirmCancelOrder}
        handleCloseModal={() => setModalConfirmCancelOrder(false)}
        onConfirm={() => handleCancelOrder()}
      />
    </React.Fragment>
  );
};

export default OrderSummaryDetails;
