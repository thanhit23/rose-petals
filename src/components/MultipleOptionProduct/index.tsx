import React from 'react';
import { FormattedMessage } from 'react-intl';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import ProductItem from './ProductItem';
import messages from './messages';
import styles from './styles';

function MultipleOptionProduct() {
  const dataLatestProducts = [
    {
      srcImg: 'https://bazar-react.vercel.app/assets/images/products/Fashion/Shoes/1.Nike%20Red.png',
      price: 210,
      star: 5,
      name: 'Nike Red',
    },
    {
      srcImg: 'https://bazar-react.vercel.app/assets/images/products/Fashion/Shoes/21.NorthStarBlue.png',
      price: 110,
      star: 4,
      name: 'North Star Blue',
    },
    {
      srcImg: 'https://bazar-react.vercel.app/assets/images/products/Fashion/Shoes/3.PumaBlack.png',
      price: 110,
      star: 4,
      name: 'Puma Black',
    },
    {
      srcImg: 'https://bazar-react.vercel.app/assets/images/products/Fashion/Shoes/1.Nike%20Red.png',
      price: 210,
      star: 5,
      name: 'Nike Red',
    },
    {
      srcImg: 'https://bazar-react.vercel.app/assets/images/products/Fashion/Shoes/21.NorthStarBlue.png',
      price: 110,
      star: 4,
      name: 'North Star Blue',
    },
    {
      srcImg: 'https://bazar-react.vercel.app/assets/images/products/Fashion/Shoes/3.PumaBlack.png',
      price: 110,
      star: 4,
      name: 'Puma Black',
    },
  ];
  const dataBestOfTheWeek = [
    {
      srcImg: 'https://bazar-react.vercel.app/assets/images/products/Fashion/Jewellery/2.Black%20Metal%20Ring.png',
      price: 140,
      star: 5,
      name: 'Black Metal Ring',
    },
    {
      srcImg:
        'https://bazar-react.vercel.app/assets/images/products/Fashion/Jewellery/17.HeavyStoneColorfulNecklace.png',
      price: 1140,
      star: 4,
      name: 'Heavy Stone Colorful Necklace',
    },
    {
      srcImg: 'https://bazar-react.vercel.app/assets/images/products/Fashion/Jewellery/6.IndianCopperEarrings.png',
      price: 310,
      star: 4,
      name: 'Indian Copper Earrings',
    },
    {
      srcImg: 'https://bazar-react.vercel.app/assets/images/products/Fashion/Jewellery/2.Black%20Metal%20Ring.png',
      price: 140,
      star: 5,
      name: 'Black Metal Ring',
    },
    {
      srcImg:
        'https://bazar-react.vercel.app/assets/images/products/Fashion/Jewellery/17.HeavyStoneColorfulNecklace.png',
      price: 1140,
      star: 4,
      name: 'Heavy Stone Colorful Necklace',
    },
    {
      srcImg: 'https://bazar-react.vercel.app/assets/images/products/Fashion/Jewellery/6.IndianCopperEarrings.png',
      price: 310,
      star: 4,
      name: 'Indian Copper Earrings',
    },
  ];

  return (
    <Container maxWidth="lg" sx={styles.container}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12} lg={6}>
          <Box component="h3" sx={styles.boxTitle}>
            <FormattedMessage {...messages.latestProducts} />
          </Box>
          <Grid container>
            {dataLatestProducts.map(({ price, star, name, srcImg }, i) => (
              <Grid key={i} item xs={12} md={6} lg={6}>
                <ProductItem key={i} name={name} price={price} srcImg={srcImg} star={star} />
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Grid item xs={12} md={12} lg={6}>
          <Box component="h3" sx={styles.boxTitle}>
            <FormattedMessage {...messages.bestWeek} />
          </Box>
          <Grid container>
            {dataBestOfTheWeek.map(({ price, star, name, srcImg }, i) => (
              <Grid key={i} item xs={12} md={6} lg={6}>
                <ProductItem key={i} name={name} price={price} srcImg={srcImg} star={star} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
export default MultipleOptionProduct;
