import { FormattedMessage } from 'react-intl';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { Product } from 'src/common/types';

import ProductItem from './ProductItem';
import messages from './messages';
import styles from './styles';

type Props = {
  listRelatedProduct: Product[];
};

const RelatedProducts: React.FC<Props> = ({ listRelatedProduct }) => (
  <Box marginBottom="60px">
    <Box component="h3" sx={styles.relatedTitle}>
      <FormattedMessage {...messages.title} />
    </Box>
    <Grid container spacing={{ xs: 8 }}>
      {listRelatedProduct.map(productRelate => (
        <ProductItem key={productRelate._id} productRelate={productRelate} />
      ))}
    </Grid>
  </Box>
);

export default RelatedProducts;
