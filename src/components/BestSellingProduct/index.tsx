import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { FormattedMessage } from 'react-intl';
import { Slide } from 'react-slideshow-image';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import messages from '../BestSellingCategories/messages';
import ProductItem from './ProductItem';

import 'react-slideshow-image/dist/styles.css';
import styles from './styles';

function BestSellingProduct() {
  return (
    <Container maxWidth="lg" sx={styles.containerBestSell}>
      <Box component="h2" sx={styles.boxTitle}>
        <FormattedMessage {...messages.title} />
      </Box>
      <Box>
        <Slide
          slidesToScroll={1}
          slidesToShow={1}
          autoplay={false}
          responsive={[
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
              },
            },
          ]}
          nextArrow={
            <Button sx={styles.nextPrevArrow}>
              <ArrowForwardIcon sx={styles.arrowForwardIcon} />
            </Button>
          }
          prevArrow={
            <Button sx={styles.nextPrevArrow}>
              <ArrowBackIcon sx={styles.arrowForwardIcon} />
            </Button>
          }
        >
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
        </Slide>
      </Box>
    </Container>
  );
}

export default BestSellingProduct;
