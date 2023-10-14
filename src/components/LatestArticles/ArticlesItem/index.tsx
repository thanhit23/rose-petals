import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import messages from '../messages';
import styles from './styles';

type Props = {
  article: {
    title: string;
    image: string;
    date: string;
    path: string;
    description: string;
  };
};

const ArticleItem: React.FC<Props> = ({ article }) => (
  <Grid item xs={12} md={4}>
    <Paper sx={styles.paper}>
      <Box sx={styles.paperBoxImg}>
        <Box overflow="hidden" width="100%">
          <Box component="img" src={article?.image} sx={styles.boxImg} />
        </Box>
        <Box sx={styles.boxTime}>
          <Box component="p" sx={styles.boxComponentTime}>
            {article?.date}
          </Box>
        </Box>
      </Box>
      <Box sx={styles.boxInformation}>
        <Link to="#" style={styles.linkDefault}>
          <Box component="h4" sx={styles.linkOffCoupon}>
            {article?.title}
          </Box>
        </Link>
        <Box component="p" sx={styles.boxDescription}>
          {article?.description}
        </Box>
        <Link to={article?.path} style={styles.linkDefault}>
          <Box component="span" sx={styles.linkReadMore}>
            <FormattedMessage {...messages.readMore} />
            <ArrowForwardIcon sx={styles.iconReadMore} />
          </Box>
        </Link>
      </Box>
    </Paper>
  </Grid>
);

export default ArticleItem;
