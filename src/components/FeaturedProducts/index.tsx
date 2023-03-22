import { FormattedMessage } from 'react-intl';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import styles from './styles';
import messages from './messages';
import ProductItem from '../ProductItem';
import SlideProduct from '../SlideProduct';

function FeaturedProducts() {
  return (
    <Container maxWidth="lg" sx={styles.containerFeatureProducts}>
      <Box component="h2" sx={styles.boxTitle}>
        <FormattedMessage {...messages.title} />
      </Box>
      <Box>
        <SlideProduct slidesToShow={5}>
          <ProductItem
            category="Women's Fashion"
            name="Gray Overcoat Women"
            slug="gray-overcoat-women"
            price={110.0}
            star={4}
            review={1000}
            thumbnail="https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FClothes%2F20.GrayOvercoatWomen.png&w=3840&q=75"
            widthHeightImg="227px"
          />
          <ProductItem
            category="Women's Fashion"
            name="Gray Overcoat Women"
            slug="gray-overcoat-women"
            price={110.0}
            star={4}
            review={1000}
            thumbnail="https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FClothes%2F20.GrayOvercoatWomen.png&w=3840&q=75"
            widthHeightImg="227px"
          />
          <ProductItem
            category="Women's Fashion"
            name="Gray Overcoat Women"
            slug="gray-overcoat-women"
            price={110.0}
            star={4}
            review={1000}
            thumbnail="https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FClothes%2F20.GrayOvercoatWomen.png&w=3840&q=75"
            widthHeightImg="227px"
          />
          <ProductItem
            category="Women's Fashion"
            name="Gray Overcoat Women"
            slug="gray-overcoat-women"
            price={110.0}
            star={4}
            review={1000}
            thumbnail="https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FClothes%2F20.GrayOvercoatWomen.png&w=3840&q=75"
            widthHeightImg="227px"
          />
          <ProductItem
            category="Women's Fashion"
            name="Gray Overcoat Women"
            slug="gray-overcoat-women"
            price={110.0}
            star={4}
            review={1000}
            thumbnail="https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FClothes%2F20.GrayOvercoatWomen.png&w=3840&q=75"
            widthHeightImg="227px"
          />
          <ProductItem
            category="Women's Fashion"
            name="Gray Overcoat Women"
            slug="gray-overcoat-women"
            price={110.0}
            star={4}
            review={1000}
            thumbnail="https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FClothes%2F20.GrayOvercoatWomen.png&w=3840&q=75"
            widthHeightImg="227px"
          />
        </SlideProduct>
      </Box>
    </Container>
  );
}

export default FeaturedProducts;
