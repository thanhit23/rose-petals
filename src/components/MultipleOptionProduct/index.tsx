import React from 'react';
import { FormattedMessage } from 'react-intl';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import ProductItem from './ProductItem';
import messages from './messages';
import styles from './styles';
import { Props } from './types';

function MultipleOptionProduct({ listData }: Props) {
  return (
    <Container maxWidth="lg" sx={styles.container}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12} lg={6}>
          <Box component="h3" sx={styles.boxTitle}>
            <FormattedMessage {...messages.latestProducts} />
          </Box>
          <Grid container>
            {listData.dataBestOfTheWeek.map(({ price, star, name, thumbnail }, i) => (
              <Grid key={i} item xs={12} md={6} lg={6}>
                <ProductItem key={i} name={name} price={price} srcImg={thumbnail} star={star} />
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Grid item xs={12} md={12} lg={6}>
          <Box component="h3" sx={styles.boxTitle}>
            <FormattedMessage {...messages.latestProducts} />
          </Box>
          <Grid container>
            {listData.dataLatestProducts.map(({ price, star, name, thumbnail }, i) => (
              <Grid key={i} item xs={12} md={6} lg={6}>
                <ProductItem key={i} name={name} price={price} srcImg={thumbnail} star={star} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
export default MultipleOptionProduct;
