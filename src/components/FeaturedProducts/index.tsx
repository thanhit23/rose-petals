import React from 'react';
import { FormattedMessage } from 'react-intl';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { Product } from 'src/common/types';

import ProductItem from '../ProductItemQuickView';
import SlideProduct from '../SlideProduct';
import messages from './messages';
import styles from './styles';

type Props = {
  listFeatureProduct: Product[];
};

const FeaturedProducts: React.FC<Props> = ({ listFeatureProduct }) => (
  <Container maxWidth="lg" sx={styles.containerFeatureProducts}>
    <Box component="h2" sx={styles.boxTitle}>
      <FormattedMessage {...messages.title} />
    </Box>
    <Box>
      {listFeatureProduct.length > 0 && (
        <SlideProduct slidesToShow={5}>
          {listFeatureProduct.map((product: Product) => (
            <ProductItem key={product._id} product={product} widthHeightImg="227px" />
          ))}
        </SlideProduct>
      )}
    </Box>
  </Container>
);

export default FeaturedProducts;
