import Grid from '@mui/material/Grid';

import ProductForm from './ProductForm';
import ProductSlide from './ProductSlide';
import { ProductProps } from './types';

function ProductBriefing({ product }: ProductProps) {
  const { images } = product;
  return (
    <>
      <Grid container spacing={3}>
        <ProductSlide images={images} />
        <ProductForm product={product} />
      </Grid>
    </>
  );
}

export default ProductBriefing;
