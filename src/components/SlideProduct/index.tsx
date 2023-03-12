import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Slide } from 'react-slideshow-image';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import styles from './styles';
import { SlideProductsType } from './types';

import 'react-slideshow-image/dist/styles.css';

function SlideProduct({ children, autoplay = false, slidesToShow = 4, arrows = true }: SlideProductsType) {
  return (
    <Box>
      <Slide
        arrows={arrows}
        slidesToScroll={1}
        slidesToShow={1}
        autoplay={autoplay}
        responsive={[
          {
            breakpoint: 800,
            settings: {
              slidesToShow: slidesToShow,
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
        {children}
      </Slide>
    </Box>
  );
}

export default SlideProduct;
