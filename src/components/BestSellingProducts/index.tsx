import { FormattedMessage } from 'react-intl';
import 'react-slideshow-image/dist/styles.css';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { products } from 'src/mockData';

import ProductItem from '../ProductItemQuickView';
import SlideProduct from '../SlideProduct';
import messages from './messages';
import styles from './styles';

function BestSellingProducts() {
  return (
    <Container maxWidth="lg" sx={styles.containerBestSell}>
      <Box component="h2" sx={styles.boxTitle}>
        <FormattedMessage {...messages.title} />
      </Box>
      <Box>
        <SlideProduct slidesToShow={4}>
          {products.map((product, index) => (
            <ProductItem key={index} product={product} />
          ))}
        </SlideProduct>
      </Box>
    </Container>
  );
}

export default BestSellingProducts;
