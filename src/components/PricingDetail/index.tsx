import React from 'react';
import { FormattedMessage } from 'react-intl';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import { ProductList } from 'src/containers/Cart/types';
import { formatPrice } from 'src/helpers';
import useCalculateTotalPrice from 'src/hooks/useCalculateTotalPrice';

import messages from './messages';
import styles from './styles';

type Props = {
  productList: ProductList;
};

const PricingDetail: React.FC<Props> = ({ productList }) => {
  const totalPrice = useCalculateTotalPrice(productList);

  return (
    <Paper sx={styles.paper}>
      <Box sx={styles.boxCalculate}>
        <Typography sx={styles.typographyTitle}>
          <FormattedMessage {...messages.subtotal} />
        </Typography>
        <Typography sx={styles.typographyPrice}>{formatPrice.format(totalPrice)}</Typography>
      </Box>
      <Box sx={styles.boxCalculate}>
        <Typography sx={styles.typographyTitle}>
          <FormattedMessage {...messages.shipping} />
        </Typography>
        <Typography sx={styles.typographyPrice}>_</Typography>
      </Box>
      <Box sx={styles.boxCalculate}>
        <Typography sx={styles.typographyTitle}>
          <FormattedMessage {...messages.tax} />
        </Typography>
        <Typography sx={styles.typographyPrice}>_</Typography>
      </Box>
      <Box sx={{ ...styles.boxCalculate, marginBottom: '16px' }}>
        <Typography sx={styles.typographyTitle}>
          <FormattedMessage {...messages.discount} />
        </Typography>
        <Typography sx={styles.typographyPrice}>_</Typography>
      </Box>
      <Divider sx={styles.divider} />
      <Typography sx={styles.typographyTotalPrice}>{formatPrice.format(totalPrice)}</Typography>
    </Paper>
  );
};

export default PricingDetail;
