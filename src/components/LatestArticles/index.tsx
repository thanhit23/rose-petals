import { FormattedMessage } from 'react-intl';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import ArticleItem from './ArticlesItem';
import messages from './messages';
import styles from './styles';

function LatestArticles() {
  const listLateArticles = [
    {
      title: '30% Off Coupon for Black Friday',
      image: 'https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fblogs%2Fblog-1.jpg&w=3840&q=75',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit.…',
      date: '21 SEP',
      path: '/',
    },
    {
      title: '10% Discount for Cosmatics',
      image: 'https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fblogs%2Fblog-2.jpg&w=3840&q=75',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit.…',
      date: '21 SEP',
      path: '/',
    },
    {
      title: 'Buy 2 get 1 free Offer',
      image: 'https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fblogs%2Fblog-3.jpg&w=3840&q=75',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit.…',
      date: '21 SEP',
      path: '/',
    },
  ];

  return (
    <Container maxWidth="lg" sx={styles.containerFeatureProducts}>
      <Box component="h2" sx={styles.boxTitle}>
        <FormattedMessage {...messages.title} />
      </Box>
      <Grid container spacing={3}>
        {listLateArticles.map((art, i) => (
          <ArticleItem key={i} article={art} />
        ))}
      </Grid>
    </Container>
  );
}

export default LatestArticles;
