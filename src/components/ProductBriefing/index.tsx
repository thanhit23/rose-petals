import Grid from '@mui/material/Grid';

import ProductForm from './ProductForm';
import ProductSlide from './ProductSlide';
import { Product } from './types';

function ProductBriefing({ data }: { data: Product }) {
  const { images } = data;
  return (
    <>
      <Grid container spacing={3}>
        <ProductSlide images={images} />
        <ProductForm infoProduct={data} />
      </Grid>
    </>
  );
}

export default ProductBriefing;
