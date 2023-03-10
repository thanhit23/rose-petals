import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { FormattedMessage } from 'react-intl';

import ProductItem from '../ProductItem';
import SlideProduct from '../SlideProduct';
import messages from './messages';
import styles from './styles';

import 'react-slideshow-image/dist/styles.css';

function BestSellingProduct() {
  return (
    <Container maxWidth="lg" sx={styles.containerBestSell}>
      <Box component="h2" sx={styles.boxTitle}>
        <FormattedMessage {...messages.title} />
      </Box>
      <Box>
        <SlideProduct slidesToShow={4}>
          <ProductItem
            category="Women's Fashion"
            name="Gray Overcoat Women"
            price={110.0}
            star={4}
            review={1000}
            thumbnail="https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FClothes%2F20.GrayOvercoatWomen.png&w=3840&q=75"
          />
          <ProductItem
            category="Women's Fashion"
            name="Gray Overcoat Women"
            price={110.0}
            star={4}
            review={1000}
            thumbnail="https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FClothes%2F20.GrayOvercoatWomen.png&w=3840&q=75"
          />
          <ProductItem
            category="Women's Fashion"
            name="Gray Overcoat Women"
            price={110.0}
            star={4}
            review={1000}
            thumbnail="https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FClothes%2F20.GrayOvercoatWomen.png&w=3840&q=75"
          />
          <ProductItem
            category="Women's Fashion"
            name="Gray Overcoat Women"
            price={110.0}
            star={4}
            review={1000}
            thumbnail="https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FClothes%2F20.GrayOvercoatWomen.png&w=3840&q=75"
          />
          <ProductItem
            category="Women's Fashion"
            name="Gray Overcoat Women"
            price={110.0}
            star={4}
            review={1000}
            thumbnail="https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FClothes%2F20.GrayOvercoatWomen.png&w=3840&q=75"
          />
          <ProductItem
            category="Women's Fashion"
            name="Gray Overcoat Women"
            price={110.0}
            star={4}
            review={1000}
            thumbnail="https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FClothes%2F20.GrayOvercoatWomen.png&w=3840&q=75"
          />
          <ProductItem
            category="Women's Fashion"
            name="Gray Overcoat Women"
            price={110.0}
            star={4}
            review={1000}
            thumbnail="https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FClothes%2F20.GrayOvercoatWomen.png&w=3840&q=75"
          />
          <ProductItem
            category="Women's Fashion"
            name="Gray Overcoat Women"
            price={110.0}
            star={4}
            review={1000}
            thumbnail="https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FClothes%2F20.GrayOvercoatWomen.png&w=3840&q=75"
          />
          <ProductItem
            category="Women's Fashion"
            name="Gray Overcoat Women"
            price={110.0}
            star={4}
            review={1000}
            thumbnail="https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FClothes%2F20.GrayOvercoatWomen.png&w=3840&q=75"
          />
          <ProductItem
            category="Women's Fashion"
            name="Gray Overcoat Women"
            price={110.0}
            star={4}
            review={1000}
            thumbnail="https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FClothes%2F20.GrayOvercoatWomen.png&w=3840&q=75"
          />
        </SlideProduct>
      </Box>
    </Container>
  );
}

export default BestSellingProduct;
