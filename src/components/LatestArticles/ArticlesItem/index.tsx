import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import styles from './styles';
import messages from '../messages';
import { ArticleItemProps } from '../types';

function ArticleItem({ article: { title, image, description, date, path } }: ArticleItemProps) {
  return (
    <Grid item xs={12} md={4}>
      <Paper sx={styles.paper}>
        <Box sx={styles.paperBoxImg}>
          <Box overflow="hidden" width="100%">
            <Box component="img" src={image} sx={styles.boxImg} />
          </Box>
          <Box sx={styles.boxTime}>
            <Box component="p" sx={styles.boxComponentTime}>
              {date}
            </Box>
          </Box>
        </Box>
        <Box sx={styles.boxInformation}>
          <Link to="#" style={styles.linkDefault}>
            <Box component="h4" sx={styles.linkOffCoupon}>
              {title}
            </Box>
          </Link>
          <Box component="p" sx={styles.boxDescription}>
            {description}
          </Box>
          <Link to={path} style={styles.linkDefault}>
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
