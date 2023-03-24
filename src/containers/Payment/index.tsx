import React from 'react';

import Gird from '@mui/material/Grid';
import Container from '@mui/material/Container';

import FormSteps from '../../components/FormSteps';
import LayoutMain from '../../components/LayoutMain';
import DeliveryMethod from '../../components/DeliveryMethod';
import PaymentSummary from '../../components/PaymentSummary';

function Payment() {
  return (
    <LayoutMain>
      <Container maxWidth="lg" sx={{ margin: '32px auto' }}>
        <FormSteps activeIndexPage={3} />
        <Gird container spacing={{ xs: 3 }}>
          <Gird item xs={12} md={8} lg={8}>
            <DeliveryMethod />
          </Gird>
          <Gird item xs={12} md={4} lg={4}>
            <PaymentSummary />
          </Gird>
        </Gird>
      </Container>
    </LayoutMain>
  );
}

export default Payment;
