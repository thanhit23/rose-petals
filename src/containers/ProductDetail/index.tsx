import React from 'react';

import Container from '@mui/material/Container';

import AvailableAtShop from 'src/components/AvailableAtShop';
import DetailReviewTabbedPane from 'src/components/DetailReviewTabbedPane';
import FrequentlyBoughtTogether from 'src/components/FrequentlyBoughtTogether';
import LayoutMain from 'src/components/LayoutMain';
import ProductBriefing from 'src/components/ProductBriefing';
import RelatedProducts from 'src/components/RelatedProducts';

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
