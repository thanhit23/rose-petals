import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import styles from './styles';

function ArticleItem() {
  return (
    <Grid item xs={4}>
      <Paper elevation={1}>
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
          <Link href="#" sx={styles.linkDefault}>
            <Box component="h4" sx={styles.linkOffCoupon}>
              30% Off Coupon for Black Friday
            </Box>
          </Link>
          <Box component="p" sx={styles.boxDescription}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit.…
          </Box>
          <Link href="#" sx={styles.linkDefault}>
            <Box component="span" sx={styles.linkReadMore}>
              Read More
              <ArrowForwardIcon sx={styles.iconReadMore} />
            </Box>
          </Link>
        </Box>
      </Paper>
    </Grid>
  );
}

export default ArticleItem;
