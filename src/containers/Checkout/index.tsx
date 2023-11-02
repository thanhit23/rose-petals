import { useState } from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useQuery } from '@tanstack/react-query';

import CheckoutAddressForm from 'src/components/CheckoutAddressForm';
import { FilterCheckout, ListData } from 'src/components/CheckoutAddressForm/types';
import BreadBarCartPage from 'src/components/FormSteps';
import PricingDetail from 'src/components/PricingDetail';

import { getAddress } from './services';
import { KeyAddress, ResponseAddressFormat } from './types';

const formatResponse = (result: Partial<ResponseAddressFormat>[], key: KeyAddress) =>
  result.map(item => ({
    id: item[`${key}_id`] as string,
    name: item[`${key}_name`] as string,
  }));

function Checkout() {
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

  return (
    <Container maxWidth="lg" sx={{ margin: '32px auto' }}>
      <BreadBarCartPage activeIndexPage={2} />
      <Grid container spacing={{ xs: 3 }}>
        <Grid item xs={12} md={8} lg={8}>
          <CheckoutAddressForm
            listData={listData}
            filterCheckout={filterCheckout}
            onFilterCheckout={setFilterCheckout}
          />
        </Grid>
        <Grid item xs={12} md={4} lg={4} sx={{ transition: 'all 250ms' }}>
          <PricingDetail />
        </Grid>
      </Grid>
    </Container>
  );
}

export const Component = Checkout;
