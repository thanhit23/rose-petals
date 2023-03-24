import React from 'react';
import { FormattedMessage } from 'react-intl';

import Box from '@mui/material/Box';

import styles from './styles';
import messages from './messages';

function ProductDescription() {
  return (
    <Box>
      <Box component="h3" sx={styles.specification}>
        <FormattedMessage {...messages.specification} />:
      </Box>
      <Box>
        Brand: Beats Model: S450 Wireless Bluetooth Headset FM Frequency Response: 87.5 – 108 MHz Feature: FM Radio,
        Card Supported (Micro SD / TF) Made in China
      </Box>
    </Box>
  );
}

export default ProductDescription;
