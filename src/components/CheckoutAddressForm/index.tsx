import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { yupResolver } from '@hookform/resolvers/yup';
import { LoadingButton } from '@mui/lab';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { compose } from 'redux';

import { State } from 'src/common/types';
import MuiTextField from 'src/components/TextField';
import { ProductCart } from 'src/containers/Cart/types';

import AutoCompleteAddress from '../AutocompleteAddress';
import ErrorMessage from '../ErrorMessage';
import messages from './messages';
import styles from './styles';
import { Props } from './types';
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

  const { fullName, phoneNumber, city, district, ward } = errors;

  const totalPrice = useMemo(() => {
    const result = productList.reduce(
      (total: number, productCart: ProductCart) => total + productCart.product.price * productCart.quantity,
      0,
    );

    return result;
  }, [productList]);

  const onSubmit = ({ fullName, phoneNumber, addressDetail, city, district, ward }: any) => {
    const formData = {
      fullName,
      phoneNumber,
      address: `${city.name}, ${district.name}${ward.name ? `, ${ward.name}` : ''}`,
      customerNote: addressDetail,
      amount: totalPrice,
      status: 1,
      quantity: productList.length,
    };

    onCreateOrder.mutate(formData, {
      onSuccess: ({ data: { data, status } }) => {
        if (status) {
          onCreateOrderDetail.mutate({
            products: productList.map(product => ({
              product: product._id,
              quantity: product.quantity,
              price: product.product.price,
            })),
            order: data.id,
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
                }}
                onClear={() => {
                  setValue('ward', '');
                }}
                label={<FormattedMessage {...messages.district} />}
                data={listData.district}
                validate={control}
              />
              <ErrorMessage name={district} sx={styles.errorMessage} />
            </FormControl>
            <FormControl fullWidth sx={styles.formControl}>
              <AutoCompleteAddress
                name="ward"
                value={filterCheckout.ward || ''}
                setValue={value => onFilterCheckout({ ...filterCheckout, ward: value?.id ?? null })}
                label={<FormattedMessage {...messages.ward} />}
                data={listData.ward}
                validate={control}
              />
              <ErrorMessage name={ward} sx={styles.errorMessage} />
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
