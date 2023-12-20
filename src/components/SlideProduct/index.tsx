import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import styles from './styles';
import { SlideProductsType } from './types';

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
            breakpoint: 1024,
            settings: {
              slidesToShow: slidesToShow,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 425,
            settings: {
              slidesToShow: 3,
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
