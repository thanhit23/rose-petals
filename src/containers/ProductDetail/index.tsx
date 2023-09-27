import { createContext, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import Container from '@mui/material/Container';
import { useQuery } from '@tanstack/react-query';

import AvailableAtShop from 'src/components/AvailableAtShop';
import DetailReviewTabbedPane from 'src/components/DetailReviewTabbedPane';
import FrequentlyBoughtTogether from 'src/components/FrequentlyBoughtTogether';
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
    // eslint-disable-next-line no-console
    console.log(data);
  };
  useQuery({
    queryKey: ['productDetail'],
    queryFn: () => getProductDetail(productId),
    onSuccess: ({ data: { data, status } }) => status && setDataProduct(data),
  });
  return (
    <Container maxWidth="lg" sx={{ margin: '32px auto' }}>
      <ProductBriefing data={dataProduct} />
      <DescriptionContext.Provider value={dataProduct.description}>
        <DetailReviewTabbedPane handleSubmitReview={handleSubmitReview} />
      </DescriptionContext.Provider>
      <FrequentlyBoughtTogether />
      <AvailableAtShop />
      <RelatedProducts />
    </Container>
  );
}

export const Component = ProductDetail;
