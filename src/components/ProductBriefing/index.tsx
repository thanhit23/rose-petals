import Grid from '@mui/material/Grid';

import ProductForm from './ProductForm';
import ProductSlide from './ProductSlide';

function ProductBriefing() {
  return (
    <>
      <Grid container spacing={3}>
        <ProductSlide />
        <ProductForm />
      </Grid>
    </>
  );
}

export default ProductBriefing;
