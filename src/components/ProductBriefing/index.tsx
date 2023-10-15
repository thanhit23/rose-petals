import React from 'react';

import Grid from '@mui/material/Grid';

import { Product } from 'src/common/types';

import ProductForm from './ProductForm';
import ProductSlide from './ProductSlide';

type Props = {
  product?: Product;
};

const ProductBriefing: React.FC<Props> = ({ product }) => (
  <>
    <Grid container spacing={3}>
      <ProductSlide images={product?.images || []} />
      <ProductForm product={product} />
    </Grid>
  </>
);

export default ProductBriefing;
