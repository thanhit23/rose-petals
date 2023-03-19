import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import LayoutMain from '../LayoutMain';
import BreadBarCartPage from '../BreadBarCartPage';
import ProductItem from './ProductItem';
import BillingInformation from './BillingInformation';
import styles from './styles';

function CartPage() {
  return (
    <LayoutMain>
      <Container
        maxWidth="lg"
        sx={{
          margin: '32px auto',
        }}
      >
        <Box marginBottom="20px">
          <Grid container spacing={{ xs: 3 }}>
            <Grid item xs={12}>
              <Box sx={styles.boxBreadBar}>
                <BreadBarCartPage activeIndexPage={1} />
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Grid container spacing={{ xs: 3 }}>
          <Grid item xs={12} md={8}>
            <ProductItem />
            <ProductItem />
            <ProductItem />
          </Grid>
          <Grid item xs={12} md={4}>
            <BillingInformation />
          </Grid>
        </Grid>
      </Container>
    </LayoutMain>
  );
}

export default CartPage;
