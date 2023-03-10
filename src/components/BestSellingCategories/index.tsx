import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { FormattedMessage } from 'react-intl';

import ItemSell from './ItemSell';
import styles from './styles';
import messages from './messages';

function BestSellingCategories() {
  return (
    <Container maxWidth="lg" sx={styles.containerBestSell}>
      <Box component="h2" sx={styles.boxTitle}>
        <FormattedMessage {...messages.title} />
      </Box>
      <Grid container spacing={3}>
        <ItemSell
          srcImg="https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Ft-shirt4.png&w=3840&q=75"
          title={<FormattedMessage {...messages.menFashion} />}
        />
        <ItemSell
          srcImg="https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Ft-shirt5.png&w=3840&q=75"
          title={<FormattedMessage {...messages.womenFashion} />}
        />
        <ItemSell
          srcImg="https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fsmartwatch-2.png&w=3840&q=75"
          title={<FormattedMessage {...messages.gadgets} />}
        />
        <ItemSell
          srcImg="https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fcasmatics.jpg&w=3840&q=75"
          title={<FormattedMessage {...messages.cosmetics} />}
        />
      </Grid>
    </Container>
  );
}

export default BestSellingCategories;
