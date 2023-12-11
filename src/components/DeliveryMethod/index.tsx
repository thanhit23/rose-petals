import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { FormattedMessage } from 'react-intl';
import { PayPalButton } from 'react-paypal-button-v2';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';

import { LoadingButton } from '@mui/lab';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import Gird from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Radio from '@mui/material/Radio';
import _ from 'lodash';

import vnpay from 'src/resources/images/vnpay.png';
import { PATH_AUTH } from 'src/routes/paths';

import ModalConfirm from '../ModalConfirm';
import addPaypalScript from './addPaypalScript';
import messages from './messages';
import styles from './styles';
import { Props } from './types';

const DeliveryMethod: React.FC<Props> = ({ orderDetail, onPayWithVNPay, onUpdateOrder }) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get('id') as string;

  const [isCashOnDelivery, setIsCashOnDelivery] = useState(false);
  const [selectedValue, setSelectedValue] = useState(1);
  const [sdkReady, setSdkReady] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(+event.target.value);
  };

  const renderAddress = (address: string, customerNote: string) =>
    customerNote ? `${address}, ${customerNote}` : address;

  const handlePayWithVNPay = () => {
    onPayWithVNPay.mutate({
      address: renderAddress(orderDetail.address, orderDetail.customerNote),
      phoneNumber: orderDetail.phoneNumber,
      orderId: orderId,
      amount: orderDetail.totalPrice,
    });
  };

  const renderFormVNPay = () => {
    if (selectedValue === 1) {
      return (
        <form>
          <Box marginBottom="24px">
            <Gird container sx={styles.boxPayWithVNPay}>
              <img width="80" height="80" src={vnpay} alt="VNPay" />
              <Box component={'h3'} sx={styles.eWalletVNPay}>
                <FormattedMessage {...messages.eWalletVNPay} />
              </Box>
            </Gird>
          </Box>
          <LoadingButton
            loading={onPayWithVNPay.isLoading}
            variant="outlined"
            sx={styles.btnSubmit}
            onClick={handlePayWithVNPay}
          >
            <FormattedMessage {...messages.btnContinue} />
          </LoadingButton>
          <Divider sx={styles.divider} />
        </form>
      );
    }
  };

  const onPaymentPaypalSuccess = () => {
    toast.success(<FormattedMessage {...messages.paymentSuccess} />);
    onUpdateOrder.mutate({
      id: orderId,
      address: orderDetail.address,
      amount: orderDetail.totalPrice,
      quantity: _.size(orderDetail.products),
      status: orderDetail.status,
      methodPayment: 3,
    });
    navigate(PATH_AUTH.order.id(orderId));
  };

  const onPaymentPaypalError = () => {
    toast.error(<FormattedMessage {...messages.paymentFailed} />);
  };

  const vndToUsdPrice = (price: number) => (price / 23000).toFixed(2);

  const renderFormPaypal = () => {
    if (selectedValue === 2) {
      return (
        <React.Fragment>
          {sdkReady && (
            <PayPalButton
              amount={vndToUsdPrice(orderDetail.totalPrice)}
              onSuccess={onPaymentPaypalSuccess}
              onError={onPaymentPaypalError}
            />
          )}
        </React.Fragment>
      );
    }
  };

  useEffect(() => {
    if (!window.paypal) {
      addPaypalScript(setSdkReady);
    } else {
      setSdkReady(true);
    }
  }, []);

  const handleCashOnDelivery = () => {
    onUpdateOrder.mutate(
      {
        id: orderId,
        address: orderDetail.address,
        amount: orderDetail.totalPrice,
        quantity: _.size(orderDetail.products),
        status: orderDetail.status,
        methodPayment: 1,
      },
      {
        onSuccess: ({ data: { status } }) => {
          if (status) {
            toast.success(<FormattedMessage {...messages.orderSuccess} />);
            navigate(PATH_AUTH.order.id(orderId));
          } else {
            toast.error(<FormattedMessage {...messages.orderFailed} />);
          }
        },
      },
    );
  };

  return (
    <React.Fragment>
      <Paper sx={styles.paperPayCreditCard}>
        <FormControlLabel
          sx={styles.formControlLabel}
          label={<FormattedMessage {...messages.payWithVNPay} />}
          control={
            <Radio
              value={1}
              size="small"
              name="radio-buttons"
              onChange={handleChange}
              checked={selectedValue === 1}
              inputProps={{ 'aria-label': 'A' }}
            />
          }
        />
        <Divider sx={styles.divider} />
        {renderFormVNPay()}
        <FormControlLabel
          sx={styles.formControlLabel}
          label={<FormattedMessage {...messages.payWithPaypal} />}
          control={
            <Radio
              value={2}
              size="small"
              name="radio-buttons"
              onChange={handleChange}
              checked={selectedValue === 2}
              inputProps={{ 'aria-label': 'B' }}
            />
          }
        />
        <Divider sx={styles.divider} />
        {renderFormPaypal()}
        <FormControlLabel
          sx={{ ...styles.formControlLabel, marginBottom: 0 }}
          label={<FormattedMessage {...messages.cashOnDelivery} />}
          control={
            <Radio
              value={3}
              size="small"
              name="radio-buttons"
              onChange={handleChange}
              checked={selectedValue === 3}
              inputProps={{ 'aria-label': 'C' }}
            />
          }
        />
      </Paper>
      <Gird container spacing={{ xs: 7 }}>
        <Gird item xs={12} sm={6}>
          <Link to="/checkout">
            <Button variant="outlined" sx={styles.btnBackCheckout}>
              <FormattedMessage {...messages.btnBackToCheckout} />
            </Button>
          </Link>
        </Gird>
        <Gird item xs={12} sm={6}>
          <LoadingButton
            loading={onUpdateOrder.isLoading}
            disabled={!(selectedValue === 3)}
            variant="contained"
            sx={styles.btnReview}
            onClick={() => setIsCashOnDelivery(true)}
          >
            <FormattedMessage {...messages.btnReview} />
          </LoadingButton>
        </Gird>
      </Gird>
      <ModalConfirm
        content={<FormattedMessage {...messages.paymentOnDelivery} />}
        openModal={isCashOnDelivery}
        handleCloseModal={() => setIsCashOnDelivery(false)}
        onConfirm={() => handleCashOnDelivery()}
      />
    </React.Fragment>
  );
};

export default DeliveryMethod;
