import React from 'react';

import Container from '@mui/material/Container';
import Gird from '@mui/material/Grid';

import DeliveryMethod from 'src/components/DeliveryMethod';
import FormSteps from 'src/components/FormSteps';
import LayoutMain from 'src/components/LayoutMain';
import PaymentSummary from 'src/components/PaymentSummary';

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
