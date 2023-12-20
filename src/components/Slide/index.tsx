import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { PATH_PUBLIC } from 'src/routes/paths';

import Default from './Default';
import styles from './styles';

function SlideShow() {
  const renderDotted = () => (
    <div className="indicator">
      <Box sx={styles.boxDot} />
    </div>
  );

  const slides = [
    {
      srcImg: 'https://bazar-react.vercel.app/assets/images/products/bag.png',
      to: PATH_PUBLIC.product.category('657fa9feb2afcf0008d338c3', 'Túi Ví'),
    },
    {
      srcImg: 'https://bazar-react.vercel.app/assets/images/products/nike-black.png',
      to: PATH_PUBLIC.product.category('657fa9e9b2afcf0008d338bc', 'Giày Dép'),
    },
  ];

  return (
    <Box sx={styles.boxRootSlideShow}>
      <Container maxWidth="lg" sx={styles.containerBoxSlide}>
        <Box sx={styles.boxSlide}>
          <Slide indicators={() => renderDotted()} arrows={false} transitionDuration={350}>
            {slides.map((item, key) => (
              <div key={key} className="each-slide-effect">
                <Default srcImg={item.srcImg} to={item.to} />
              </div>
            ))}
          </Slide>
        </Box>
      </Container>
    </Box>
  );
}

export default SlideShow;
