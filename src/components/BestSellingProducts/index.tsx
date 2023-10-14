import { FormattedMessage } from 'react-intl';
import 'react-slideshow-image/dist/styles.css';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import ProductItem from '../ProductItemQuickView';
import SlideProduct from '../SlideProduct';
import messages from './messages';
import styles from './styles';

function BestSellingProducts() {
  const products = [
    {
      _id: '1',
      brand: {
        id: '1',
        name: "Women's Fashion",
      },
      category: {
        id: '1',
        name: "Women's Fashion",
      },
      name: 'Gray Overcoat Women',
      slug: 'gray-overcoat-women',
      price: 110.0,
      star: 4,
      review: 1000,
      thumbnail:
        'https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FClothes%2F20.GrayOvercoatWomen.png&w=3840&q=75',
    },
    {
      _id: '1',
      brand: {
        id: '1',
        name: "Women's Fashion",
      },
      category: {
        id: '1',
        name: "Women's Fashion",
      },
      name: 'Gray Overcoat Women',
      slug: 'gray-overcoat-women',
      price: 110.0,
      star: 4,
      review: 1000,
      thumbnail:
        'https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FClothes%2F20.GrayOvercoatWomen.png&w=3840&q=75',
    },
    {
      _id: '1',
      brand: {
        id: '1',
        name: "Women's Fashion",
      },
      category: {
        id: '1',
        name: "Women's Fashion",
      },
      name: 'Gray Overcoat Women',
      slug: 'gray-overcoat-women',
      price: 110.0,
      star: 4,
      review: 1000,
      thumbnail:
        'https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FClothes%2F20.GrayOvercoatWomen.png&w=3840&q=75',
    },
    {
      _id: '1',
      brand: {
        id: '1',
        name: "Women's Fashion",
      },
      category: {
        id: '1',
        name: "Women's Fashion",
      },
      name: 'Gray Overcoat Women',
      slug: 'gray-overcoat-women',
      price: 110.0,
      star: 4,
      review: 1000,
      thumbnail:
        'https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FClothes%2F20.GrayOvercoatWomen.png&w=3840&q=75',
    },
  ];

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
