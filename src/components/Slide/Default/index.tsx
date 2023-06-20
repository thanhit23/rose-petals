import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import styles from './styles';
import { DefaultTypes } from './types';

function Default({ srcImg }: DefaultTypes) {
  return (
    <Box>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={5} sx={styles.gripItem}>
          <Box component="h1" sx={styles.boxComponentH1}>
            Fashionable Collection
          </Box>
          <Box component="p" sx={styles.boxComponentP}>
            Get Free Shipping on all orders over $99.00
          </Box>
          <Box href="#" component="a">
            <Button variant="contained" sx={styles.btnShopNow}>
              Shop now
            </Button>
          </Box>
        </Grid>
        <Grid item xs={5}>
          <Box component="img" src={srcImg} sx={styles.boxComponentImg} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Default;
