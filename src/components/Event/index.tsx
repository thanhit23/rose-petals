import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';

import { PATH_PUBLIC } from 'src/routes/paths';

import messages from './messages';
import styles from './styles';

function Event() {
  return (
    <Container sx={styles.containerEvent}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Box sx={styles.boxItem}>
            <Box
              width="100%"
              component="img"
              src="https://bazar-react.vercel.app/assets/images/banners/men's-fashion.jpg"
              sx={styles.boxImage}
            />
            <Box sx={styles.boxInformation}>
              <Box component="h2" sx={styles.boxTitle}>
                <FormattedMessage {...messages.forMensTitle} />
              </Box>
              <Box component="p" sx={styles.boxTimeEvent}>
                <FormattedMessage {...messages.forMensTime} />
              </Box>
              <Divider sx={styles.divider} />
              <Link to={PATH_PUBLIC.product.category('6500791355ee920008ef5f27', 'Thời Trang Nam')}>
                <Box component="span" sx={styles.linkShop}>
                  <FormattedMessage {...messages.btnShopNow} />
                </Box>
              </Link>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box sx={styles.boxItem}>
            <Box
              width="100%"
              component="img"
              src="https://bazar-react.vercel.app/assets/images/banners/banner2.jpg"
              sx={styles.boxImage}
            />
            <Box sx={styles.boxInformationBlackFriday}>
              <Box>
                <Box component="p" sx={styles.boxUpToBlackFriday}>
                  <FormattedMessage {...messages.blackFridayUpTo} />
                </Box>
                <Box component="h3" sx={styles.boxTitleBlackFriday}>
                  <FormattedMessage {...messages.blackFridayTitle} />
                </Box>
                <Box component="h1" sx={styles.boxSaleBlackFriday}>
                  <FormattedMessage {...messages.blackFridaySale} />
                </Box>
              </Box>
              <Link
                to={PATH_PUBLIC.product.category('657faa0bb2afcf0008d338ca', 'Balo')}
                style={styles.linkShopBlackFriday}
              >
                <Button variant="outlined" sx={styles.btnShopBlackFriday}>
                  <FormattedMessage {...messages.btnShopNow} />
                </Button>
              </Link>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box sx={styles.boxItem}>
            <Box
              width="100%"
              component="img"
              src="https://bazar-react.vercel.app/assets/images/banners/womens-fashion.jpg"
              sx={styles.boxImage}
            />
            <Box sx={styles.boxInformationForWomen}>
              <Box component="h2" sx={styles.boxTitle}>
                <FormattedMessage {...messages.forWomenTitle} />
              </Box>
              <Box component="p" sx={styles.boxTimeEvent}>
                <FormattedMessage {...messages.forWomenSale} />
              </Box>
              <Divider sx={styles.divider} />
              <Link to={PATH_PUBLIC.product.category('6500792255ee920008ef5f2b', 'Thời Trang Nữ')}>
                <Box component="span" sx={styles.linkShop}>
                  <FormattedMessage {...messages.btnShopNow} />
                </Box>
              </Link>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Event;
