import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { FormattedMessage } from 'react-intl';

import styles from './styles';
import messages from './messages';
import ArticleItem from './ArticlesItem';

function LatestArticles() {
  return (
    <Container maxWidth="lg" sx={styles.containerFeatureProducts}>
      <Box component="h2" sx={styles.boxTitle}>
        <FormattedMessage {...messages.title} />
      </Box>
      <Grid container spacing={3}>
        <ArticleItem />
        <ArticleItem />
        <ArticleItem />
      </Grid>
    </Container>
  );
}

export default LatestArticles;
