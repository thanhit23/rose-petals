import { FormattedMessage } from 'react-intl';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import ProductItem from '../ProductItemQuickView';
import SlideProduct from '../SlideProduct';
import messages from './messages';
import styles from './styles';
import { FeaturedProduct, Props } from './types';

function FeaturedProducts({ listFeatureProduct }: Props) {
  return (
    <Container maxWidth="lg" sx={styles.containerFeatureProducts}>
      <Box component="h2" sx={styles.boxTitle}>
        <FormattedMessage {...messages.title} />
      </Box>
      <Box>
        {listFeatureProduct.length > 0 && (
          <SlideProduct slidesToShow={5}>
            {listFeatureProduct.map((product: FeaturedProduct) => (
              <ProductItem
                key={product._id}
                category={product.category?.name}
                name={product.name}
                slug={product.slug}
                price={product.price}
                star={product.rating}
                review={1000}
                thumbnail={product.thumbnail}
                widthHeightImg="227px"
              />
            ))}
          </SlideProduct>
        )}
      </Box>
    </Container>
  );
}

export default FeaturedProducts;
