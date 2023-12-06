import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { yupResolver } from '@hookform/resolvers/yup';
import { LoadingButton } from '@mui/lab';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import _ from 'lodash';
import { compose } from 'redux';

import { PostOrderDetailType, PostOrderType, State } from 'src/common/types';
import MuiTextField from 'src/components/TextField';
import { ProductList } from 'src/containers/Cart/types';
import useCalculateTotalPrice from 'src/hooks/useCalculateTotalPrice';
import { PATH_AUTH } from 'src/routes/paths';

import AutoCompleteAddress from '../AutocompleteAddress';
import ErrorMessage from '../ErrorMessage';
import messages from './messages';
import styles from './styles';
import { City, District, Props, Ward } from './types';
import { validationSchema } from './validationSchema';

function CheckoutAddressForm({
  auth,
  listData,
  onFilterCheckout,
  productList,
  filterCheckout,
  onCreateOrder,
  onCreateOrderDetail,
}: Props) {
  const navigate = useNavigate();
  const totalPrice = useCalculateTotalPrice(productList);
  const [wardError, setWardError] = useState({ message: '' });
  const [districtError, setDistrictError] = useState({ message: '' });

  const {
    register,
    formState: { errors },
    control,
    handleSubmit,
    setValue,
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(validationSchema),
    defaultValues: {
      fullName: auth.name,
      phoneNumber: auth.phoneNumber,
      addressDetail: '',
      city: {},
      district: '',
      ward: '',
    },
  });

  const { fullName, phoneNumber, city } = errors;

  const formatAddress = (city: City, district: District, ward: Ward): string =>
    `${city.name}, ${district.name}${ward.name ? `, ${ward.name}` : ''}`;

  const createOrderDetailData = (productList: ProductList, orderId: string): PostOrderDetailType => ({
    products: productList.map(product => ({
      product: product.product._id,
      quantity: product.quantity,
      price: product.product.price,
    })),
    order: orderId,
    shipingFee: 0,
    discountPercent: 0,
  });

  const onSuccessOrderDetail = (response: { data: { status: boolean } }, data: { id: string }): void => {
    if (response.data.status) {
      navigate(PATH_AUTH.payment.id(data.id));
    }
  };

  const onSubmit = ({ fullName, phoneNumber, addressDetail, city, district, ward }: any): void => {
    if (!district?.name) {
      setDistrictError({ message: (<FormattedMessage {...messages.districtErrorMessage} />) as unknown as string });
      return;
    } else {
      if (_.size(listData.ward) !== 0 && !ward?.name) {
        setWardError({ message: (<FormattedMessage {...messages.wardErrorMessage} />) as unknown as string });
        return;
      }
    }

    const address: string = formatAddress(city, district, ward);

    const orderFormData: PostOrderType = {
      fullName,
      phoneNumber: phoneNumber.toString(),
      address,
      customerNote: addressDetail,
      amount: totalPrice,
      status: 1,
      quantity: _.size(productList),
    };

    onCreateOrder.mutate(orderFormData, {
      onSuccess: ({ data: { data, status } }) => {
        if (status) {
          const orderDetailData = createOrderDetailData(productList, data.id);

          onCreateOrderDetail.mutate(orderDetailData, {
            onSuccess: response => onSuccessOrderDetail(response, data),
          });
        }
      },
    });
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      <Paper elevation={1} sx={styles.paperBillingXShipping}>
        <Typography component="p" sx={styles.typographyTitle}>
          <FormattedMessage {...messages.shippingAddress} />
        </Typography>
        <Grid container spacing={{ xs: 6 }}>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth sx={styles.formControl}>
              <MuiTextField
                label={<FormattedMessage {...messages.fullName} />}
                message={messages.fullName}
                validate={register('fullName')}
              />
              <ErrorMessage name={fullName} sx={styles.errorMessage} />
            </FormControl>
            <FormControl fullWidth sx={styles.formControl}>
              <MuiTextField
                label={<FormattedMessage {...messages.phoneNumber} />}
                message={messages.phoneNumber}
                validate={register('phoneNumber')}
              />
              <ErrorMessage name={phoneNumber} sx={styles.errorMessage} />
            </FormControl>
            <FormControl fullWidth sx={styles.formControl}>
              <AutoCompleteAddress
                name="city"
                value={filterCheckout.province || ''}
                setValue={(value, reason) => {
                  const filter =
                    reason === 'clear'
                      ? { district: null, ward: null, province: value?.id ?? null }
                      : { ...filterCheckout, province: value?.id ?? null };
                  onFilterCheckout({ ...filter });
                  setDistrictError({ message: '' });
                  setWardError({ message: '' });
                }}
                label={<FormattedMessage {...messages.city} />}
                onClear={() => {
                  setValue('ward', '');
                  setValue('district', '');
                }}
                data={listData.province}
                validate={control}
              />
              <ErrorMessage name={city} sx={styles.errorMessage} />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth sx={styles.formControl}>
              <AutoCompleteAddress
                name="district"
                value={filterCheckout.district || ''}
                setValue={(value, reason) => {
                  const filter =
                    reason === 'clear'
                      ? { district: null, ward: null, province: filterCheckout.province }
                      : { ...filterCheckout, district: value?.id ?? null };
                  onFilterCheckout({ ...filter });
                  setDistrictError({ message: '' });
                  setWardError({ message: '' });
                }}
                onClear={() => {
                  setValue('ward', '');
                }}
                label={<FormattedMessage {...messages.district} />}
                data={listData.district}
                validate={control}
              />
              {<ErrorMessage name={districtError} sx={styles.errorMessage} />}
            </FormControl>
            <FormControl fullWidth sx={styles.formControl}>
              <AutoCompleteAddress
                name="ward"
                value={filterCheckout.ward || ''}
                setValue={value => {
                  onFilterCheckout({ ...filterCheckout, ward: value?.id ?? null });
                  setWardError({ message: '' });
                }}
                label={<FormattedMessage {...messages.ward} />}
                data={listData.ward}
                validate={control}
              />
              <ErrorMessage name={wardError} sx={styles.errorMessage} />
            </FormControl>
            <FormControl fullWidth sx={styles.formControl}>
              <MuiTextField
                label={<FormattedMessage {...messages.addressDetail} />}
                message={messages.addressDetail}
                validate={register('addressDetail')}
              />
            </FormControl>
          </Grid>
        </Grid>
      </Paper>
      <Grid container spacing={{ xs: 6 }}>
        <Grid item xs={12} sm={6}>
          <Link to="/cart">
            <Button variant="outlined" sx={styles.btnBackToCart}>
              <FormattedMessage {...messages.btnBackToCart} />
            </Button>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6}>
          <LoadingButton
            type="submit"
            variant="contained"
            sx={styles.btnProceedToPayment}
            loading={onCreateOrder.isLoading || onCreateOrderDetail.isLoading}
          >
            <FormattedMessage {...messages.btnProceedToPayment} />
          </LoadingButton>
        </Grid>
      </Grid>
    </Box>
  );
}

const mapStateToProps = ({ global: { auth } }: State) => ({
  auth,
});

const withConnect = connect(mapStateToProps, null);

export default compose(withConnect)(CheckoutAddressForm);
