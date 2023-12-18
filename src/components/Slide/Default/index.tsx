import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import messages from '../messages';
import styles from './styles';
import { DefaultTypes } from './types';

function Default({ srcImg, to }: DefaultTypes) {
  return (
    <Box>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={5} sx={styles.gripItem}>
          <Box component="h1" sx={styles.boxComponentH1}>
            <FormattedMessage {...messages.fashionableCollection} />
          </Box>
          <Box component="p" sx={styles.boxComponentP}>
            <FormattedMessage {...messages.slideDescription} />
          </Box>
          <Box component={Link} to={to}>
            <Button variant="contained" sx={styles.btnShopNow}>
              <FormattedMessage {...messages.shopNowBtn} />
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
