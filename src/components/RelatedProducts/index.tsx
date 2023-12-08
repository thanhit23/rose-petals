import React from 'react';
import { FormattedMessage } from 'react-intl';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { Product } from 'src/common/types';

import Loading from './Loading';
import ProductItem from './ProductItem';
import messages from './messages';
import styles from './styles';

type Props = {
  listRelatedProduct: Product[];
  isRelatedProductsLoading: boolean;
};

const RelatedProducts: React.FC<Props> = ({ listRelatedProduct, isRelatedProductsLoading }) => (
  <Box marginBottom="60px">
    <Box component="h3" sx={styles.relatedTitle}>
      <FormattedMessage {...messages.title} />
    </Box>
    <Grid container spacing={{ xs: 3 }}>
      {isRelatedProductsLoading ? (
        <Loading />
      ) : (
        <React.Fragment>
          {listRelatedProduct.map(productRelate => (
            <ProductItem key={productRelate._id} productRelate={productRelate} />
          ))}
        </React.Fragment>
      )}
    </Grid>
  </Box>
);

export default RelatedProducts;
