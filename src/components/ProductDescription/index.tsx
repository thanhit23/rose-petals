import { useContext } from 'react';
import { FormattedMessage } from 'react-intl';

import Box from '@mui/material/Box';

import { DescriptionContext } from 'src/containers/ProductDetail';

import messages from './messages';
import styles from './styles';

function ProductDescription() {
  const description = useContext(DescriptionContext);
  return (
    <Box>
      <Box component="h3" sx={styles.specification}>
        <FormattedMessage {...messages.specification} />:
      </Box>
      <Box>{description}</Box>
    </Box>
  );
}

export default ProductDescription;
