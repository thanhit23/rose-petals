import { createContext } from 'react';
import { useSearchParams } from 'react-router-dom';

import Container from '@mui/material/Container';

import DetailReviewTabbedPane from 'src/components/DetailReviewTabbedPane';
import ProductBriefing from 'src/components/ProductBriefing';
import RelatedProducts from 'src/components/RelatedProducts';
import { useGetProductDetail } from 'src/queries/product';

export const DescriptionContext = createContext('');

function ProductDetail() {
  const [searchParams] = useSearchParams();

  const productId = searchParams.get('id') as string;

  const { data } = useGetProductDetail(productId);

  const handleSubmitReview = (data: object) => {
    console.log(data);
  };

  return (
    <Container maxWidth="lg" sx={{ margin: '32px auto' }}>
      <ProductBriefing product={data} />
      <DescriptionContext.Provider value={data?.description || ''}>
        <DetailReviewTabbedPane handleSubmitReview={handleSubmitReview} />
      </DescriptionContext.Provider>
      <RelatedProducts />
    </Container>
  );
}

export const Component = ProductDetail;
