import React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { FormattedMessage } from 'react-intl';

import ProductItem from './ProductItem';
import styles from './styles';
import messages from './messages';

function MultipleOptionProduct() {
  const dataSaleProducts = [
    {
      srcImg: 'https://bazar-react.vercel.app/assets/images/products/Fashion/Clothes/7.DenimClassicBlueJeans.png',
      price: 310,
      star: 5,
      name: 'Denim Classic Blue Jeans',
    },
    {
      srcImg: 'https://bazar-react.vercel.app/assets/images/products/Fashion/Clothes/16.DoubleWoolOvercoat.png',
      price: 350,
      star: 4,
      name: 'Double Wool Overcoat',
    },
    {
      srcImg: 'https://bazar-react.vercel.app/assets/images/products/Fashion/Clothes/8.RoyalBlackSuitPant.png',
      price: 1140,
      star: 4,
      name: 'Royal Black Suit Pant',
    },
  ];

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
  ];

  const dataPopularProducts = [
    {
      srcImg: 'https://bazar-react.vercel.app/assets/images/products/Fashion/Clothes/20.GrayOvercoatWomen.png',
      price: 110,
      star: 5,
      name: 'Gray Overcoat Women',
    },
    {
      srcImg: 'https://bazar-react.vercel.app/assets/images/products/Fashion/Clothes/24.OliveCasualSweater.png',
      price: 140,
      star: 4,
      name: "Women's Fashion",
    },
    {
      srcImg: 'https://bazar-react.vercel.app/assets/images/products/Fashion/Clothes/14.BlueTrousers.png',
      price: 180,
      star: 4,
      name: 'Blue Trousers',
    },
  ];

  return (
    <Container maxWidth="lg" sx={styles.container}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Box component="h3" sx={styles.boxTitle}>
            <FormattedMessage {...messages.saleProducts} />
          </Box>
          {dataSaleProducts.map(({ price, star, name, srcImg }, i) => (
            <ProductItem key={i} name={name} price={price} srcImg={srcImg} star={star} />
          ))}
        </Grid>
        <Grid item xs={3}>
          <Box component="h3" sx={styles.boxTitle}>
            <FormattedMessage {...messages.latestProducts} />
          </Box>
          {dataLatestProducts.map(({ price, star, name, srcImg }, i) => (
            <ProductItem key={i} name={name} price={price} srcImg={srcImg} star={star} />
          ))}
        </Grid>
        <Grid item xs={3}>
          <Box component="h3" sx={styles.boxTitle}>
            <FormattedMessage {...messages.bestWeek} />
          </Box>
          {dataBestOfTheWeek.map(({ price, star, name, srcImg }, i) => (
            <ProductItem key={i} name={name} price={price} srcImg={srcImg} star={star} />
          ))}
        </Grid>
        <Grid item xs={3}>
          <Box component="h3" sx={styles.boxTitle}>
            <FormattedMessage {...messages.popularProducts} />
          </Box>
          {dataPopularProducts.map(({ price, star, name, srcImg }, i) => (
            <ProductItem key={i} name={name} price={price} srcImg={srcImg} star={star} />
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}

export default MultipleOptionProduct;
