import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

import SlideProduct from '../SlideProduct';
import styles from './styles';

function ListBrand() {
  return (
    <Container sx={styles.container}>
      <Divider sx={styles.dividerTop} />
      <Box sx={styles.boxSlide}>
        <SlideProduct slidesToShow={5} autoplay arrows={false}>
          <Box sx={styles.boxImg}>
            <Box component="img" src="https://bazar-react.vercel.app/assets/images/brands/levis.png" sx={styles.img} />
          </Box>
          <Box sx={styles.boxImg}>
            <Box
              component="img"
              src="https://bazar-react.vercel.app/assets/images/brands/alibaba.png"
              sx={styles.img}
            />
          </Box>
          <Box sx={styles.boxImg}>
            <Box component="img" src="https://bazar-react.vercel.app/assets/images/brands/lotto.png" sx={styles.img} />
          </Box>
          <Box sx={styles.boxImg}>
            <Box
              component="img"
              src="https://bazar-react.vercel.app/assets/images/brands/raymond.png"
              sx={styles.img}
            />
          </Box>
          <Box sx={styles.boxImg}>
            <Box
              component="img"
              src="https://bazar-react.vercel.app/assets/images/brands/samsung.png"
              sx={styles.img}
            />
          </Box>
        </SlideProduct>
      </Box>
      <Divider sx={styles.dividerBottom} />
    </Container>
  );
}

export default ListBrand;
