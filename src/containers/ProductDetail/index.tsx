import { createContext, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import Container from '@mui/material/Container';
import { useQuery } from '@tanstack/react-query';

import DetailReviewTabbedPane from 'src/components/DetailReviewTabbedPane';
import ProductBriefing from 'src/components/ProductBriefing';
import { Product } from 'src/components/ProductBriefing/types';
import RelatedProducts from 'src/components/RelatedProducts';

import { getProductDetail } from './service';

const initialState = {
  brand: {
    id: '',
    name: '',
  },
  category: {
    id: '',
    name: '',
  },
  createdAt: '',
  deletedAt: '',
  description: '',
  images: [{ fullUrl: '', path: '' }],
  name: '',
  price: 0,
  slug: '',
  updatedAt: '',
  _id: '',
};

export const DescriptionContext = createContext('');

function ProductDetail() {
  const [dataProduct, setDataProduct] = useState<Product>(initialState);
  const [searchParams] = useSearchParams();
  const productId = searchParams.get('id') as string;
  const handleSubmitReview = (data: object) => {
    console.log(data);
  };
  useQuery({
    queryKey: ['productDetail', productId],
    queryFn: () => getProductDetail(productId),
    onSuccess: ({ data: { data, status } }) => status && setDataProduct(data),
  });
  return (
    <Container maxWidth="lg" sx={{ margin: '32px auto' }}>
      <ProductBriefing product={dataProduct} />
      <DescriptionContext.Provider value={dataProduct.description}>
        <DetailReviewTabbedPane handleSubmitReview={handleSubmitReview} />
      </DescriptionContext.Provider>
      <RelatedProducts />
    </Container>
  );
}

export const Component = ProductDetail;
