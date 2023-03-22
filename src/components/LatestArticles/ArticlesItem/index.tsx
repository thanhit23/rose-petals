import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import styles from './styles';
import messages from '../messages';

function ArticleItem() {
  return (
    <Grid item xs={4}>
      <Paper sx={styles.paper}>
        <Box sx={styles.paperBoxImg}>
          <Box overflow="hidden" width="100%">
            <Box
              component="img"
              src="https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fblogs%2Fblog-1.jpg&w=3840&q=75"
              sx={styles.boxImg}
            />
          </Box>
          <Box sx={styles.boxTime}>
            <Box component="p" sx={styles.boxComponentTime}>
              21 SEP
            </Box>
          </Box>
        </Box>
        <Box sx={styles.boxInformation}>
          <Link to="#" style={styles.linkDefault}>
            <Box component="h4" sx={styles.linkOffCoupon}>
              30% Off Coupon for Black Friday
            </Box>
          </Link>
          <Box component="p" sx={styles.boxDescription}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit.…
          </Box>
          <Link to="#" style={styles.linkDefault}>
            <Box component="span" sx={styles.linkReadMore}>
              <FormattedMessage {...messages.readMore} />
              <ArrowForwardIcon sx={styles.iconReadMore} />
            </Box>
          </Link>
        </Box>
      </Paper>
    </Grid>
  );
}

export default ArticleItem;
