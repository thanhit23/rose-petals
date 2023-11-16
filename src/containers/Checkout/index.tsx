import { useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useMutation, useQuery } from '@tanstack/react-query';
import { compose } from 'redux';

import { State } from 'src/common/types';
import CheckoutAddressForm from 'src/components/CheckoutAddressForm';
import { FilterCheckout, ListData } from 'src/components/CheckoutAddressForm/types';
import BreadBarCartPage from 'src/components/FormSteps';
import PricingDetail from 'src/components/PricingDetail';
import { PATH_AUTH } from 'src/routes/paths';

import { ProductList } from '../Cart/types';
import { getAddress, postOrder, postOrderDetail } from './services';
import { KeyAddress, OrderDetailType, OrderType, ResponseAddressFormat } from './types';

export type Props = {
  productList: ProductList;
};

const formatResponse = (result: Partial<ResponseAddressFormat>[], key: KeyAddress) =>
  result.map(item => ({
    id: item[`${key}_id`] as string,
    name: item[`${key}_name`] as string,
  }));

const Checkout: React.FC<Props> = ({ productList }) => {
  const navigate = useNavigate();
  const [filterCheckout, setFilterCheckout] = useState<FilterCheckout>({
    province: '',
    district: null,
    ward: null,
  });

  const { data: dataCity = [] } = useQuery({
    queryKey: ['/province', filterCheckout.province],
    queryFn: ({ queryKey }) => getAddress(queryKey[0] as string),
    select: ({ data: { results } }) => formatResponse(results, 'province'),
  });

  const { data: dataDistrict = [] } = useQuery({
    queryKey: ['/province/district/', filterCheckout.province],
    queryFn: ({ queryKey }) => getAddress(`${queryKey[0]}${queryKey[1]}` as string),
    enabled: !!filterCheckout.province,
    select: ({ data: { results } }) => formatResponse(results, 'district'),
  });

  const { data: dataWard = [] } = useQuery({
    queryKey: ['/province/ward/', filterCheckout.district],
    queryFn: ({ queryKey }) => getAddress(`${queryKey[0]}${queryKey[1]}` as string),
    enabled: !!filterCheckout.province && !!filterCheckout.district,
    select: ({ data: { results } }) => formatResponse(results, 'ward'),
  });

  const listData: ListData = {
    province: dataCity,
    district: dataDistrict,
    ward: dataWard,
  };

  const createOrderDetail = useMutation({
    mutationFn: (data: OrderDetailType) => postOrderDetail(data),
    onSuccess: ({ data: { status } }) => {
      if (status) {
        navigate(PATH_AUTH.payment);
      }
    },
  });

  const createOrder = useMutation({
    mutationFn: (data: OrderType) => postOrder(data),
  });

  return (
    <Container maxWidth="lg" sx={{ margin: '32px auto' }}>
      <BreadBarCartPage activeIndexPage={2} />
      <Grid container spacing={{ xs: 3 }}>
        <Grid item xs={12} md={8} lg={8}>
          <CheckoutAddressForm
            listData={listData}
            productList={productList}
            filterCheckout={filterCheckout}
            onFilterCheckout={setFilterCheckout}
            onCreateOrder={createOrder}
            onCreateOrderDetail={createOrderDetail}
          />
        </Grid>
        <Grid item xs={12} md={4} lg={4} sx={{ transition: 'all 250ms' }}>
          <PricingDetail productList={productList} />
        </Grid>
      </Grid>
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

export const Component = compose(withConnect)(Checkout);
