import React from 'react';

import Grid from '@mui/material/Grid';

import { Product } from 'src/common/types';

import Loading from './Loading';
import ProductForm from './ProductForm';
import ProductSlide from './ProductSlide';

type Props = {
  product?: Product;
  isLoading?: boolean;
};

const ProductBriefing: React.FC<Props> = ({ product, isLoading }) => {
  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Grid container spacing={3}>
        <ProductSlide images={product?.images || []} />
        <ProductForm product={product} />
      </Grid>
    </>
  );
};

export default ProductBriefing;
