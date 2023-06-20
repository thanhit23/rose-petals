import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import Default from './Default';
import styles from './styles';

function SlideShow() {
  const renderDotted = () => (
    <div className="indicator">
      <Box sx={styles.boxDot} />
    </div>
  );

  return (
    <Box sx={styles.boxRootSlideShow}>
      <Container maxWidth="lg" sx={styles.containerBoxSlide}>
        <Box sx={styles.boxSlide}>
          <Slide indicators={() => renderDotted()} arrows={false} transitionDuration={350}>
            <div className="each-slide-effect">
              <Default srcImg="https://bazar-react.vercel.app/assets/images/products/bag.png" />
            </div>
            <div className="each-slide-effect">
              <Default srcImg="https://bazar-react.vercel.app/assets/images/products/nike-black.png" />
            </div>
          </Slide>
        </Box>
      </Container>
    </Box>
  );
}

export default SlideShow;
