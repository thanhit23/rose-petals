import { createContext } from 'react';
import { useSearchParams } from 'react-router-dom';

import Container from '@mui/material/Container';
import { useQuery } from '@tanstack/react-query';

import DetailReviewTabbedPane from 'src/components/DetailReviewTabbedPane';
import ProductBriefing from 'src/components/ProductBriefing';
import RelatedProducts from 'src/components/RelatedProducts';
import { useGetProductDetail } from 'src/queries/product';

import { getRelatedProducts } from './services';

export const DescriptionContext = createContext('');

function ProductDetail() {
  const [searchParams] = useSearchParams();
  const productId = searchParams.get('id') as string;
  const { data } = useGetProductDetail(productId);

  const handleSubmitReview = (data: object) => {
    console.log(data);
  };

  const { data: listRelatedProducts = [] } = useQuery({
    queryKey: ['RelatedProducts', data?.category.id],
    queryFn: () => getRelatedProducts(data?.category.id as string),
    enabled: !!data?.category.id,
    select: ({ data: { data } }) => data,
  });

  return (
    <Container maxWidth="lg" sx={{ margin: '32px auto' }}>
      <ProductBriefing product={data} />
      <DescriptionContext.Provider value={data?.description || ''}>
        <DetailReviewTabbedPane handleSubmitReview={handleSubmitReview} />
      </DescriptionContext.Provider>
      <RelatedProducts listRelatedProduct={listRelatedProducts} />
    </Container>
  );
}

export const Component = ProductDetail;
