import React from 'react';

import Container from '@mui/material/Container';

import LayoutMain from '../../components/LayoutMain';
import ProductBriefing from '../../components/ProductBriefing';
import AvailableAtShop from '../../components/AvailableAtShop';
import RelatedProducts from '../../components/RelatedProducts';
import DetailReviewTabbedPane from '../../components/DetailReviewTabbedPane';
import FrequentlyBoughtTogether from '../../components/FrequentlyBoughtTogether';

function ProductDetail() {
  const handleSubmitReview = (data: object) => {
    console.log(data);
  };

  return (
    <LayoutMain>
      <Container maxWidth="lg" sx={{ margin: '32px auto' }}>
        <ProductBriefing />
        <DetailReviewTabbedPane handleSubmitReview={handleSubmitReview} />
        <FrequentlyBoughtTogether />
        <AvailableAtShop />
        <RelatedProducts />
      </Container>
    </LayoutMain>
  );
}

export default ProductDetail;
