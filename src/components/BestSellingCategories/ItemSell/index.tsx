import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import styles from './styles';
import { ItemSellTypes } from './types';

function ItemSell({ srcImg, title }: ItemSellTypes) {
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Box sx={styles.boxWrapperItem}>
        <Box height="100%">
          <Box component="img" sx={styles.boxComponentImg} alt="The house from the offer." src={srcImg} />
        </Box>
        <Box sx={styles.boxWrapperTitle}>
          <Box component="h4" sx={styles.title}>
            {title}
          </Box>
        </Box>
      </Box>
    </Grid>
  );
}

export default ItemSell;
