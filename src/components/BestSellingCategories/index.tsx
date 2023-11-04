import { FormattedMessage } from 'react-intl';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import ItemSell from './ItemSell';
import messages from './messages';
import styles from './styles';

function BestSellingCategories() {
  const categories = [
    {
      title: <FormattedMessage {...messages.menFashion} />,
      srcImg: 'https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Ft-shirt4.png&w=3840&q=75',
      category: {
        id: '6500793555ee920008ef5f2f',
        slug: 'thoi-trang-nam',
      },
    },
    {
      title: <FormattedMessage {...messages.womenFashion} />,
      srcImg: 'https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Ft-shirt5.png&w=3840&q=75',
      category: {
        id: '6500792255ee920008ef5f2b',
        slug: 'thoi-trang-nu',
      },
    },
    {
      title: <FormattedMessage {...messages.gadgets} />,
      srcImg:
        'https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fsmartwatch-2.png&w=3840&q=75',
      category: {
        id: '6500793555ee920008ef5f2f',
        slug: 'djien-thoai-and-phu-kien',
      },
    },
    {
      title: <FormattedMessage {...messages.cosmetics} />,
      srcImg:
        'https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fcasmatics.jpg&w=3840&q=75',
      category: {
        id: '6500797455ee920008ef5f3b',
        slug: 'sac-djep',
      },
    },
  ];
  return (
    <Container maxWidth="lg" sx={styles.containerBestSell}>
      <Box component="h2" sx={styles.boxTitle}>
        <FormattedMessage {...messages.title} />
      </Box>
      <Grid container spacing={3}>
        {categories.map(categories => (
          <ItemSell
            key={categories.category.id}
            srcImg={categories.srcImg}
            title={categories.title}
            categories={{
              name: '',
              slug: `${categories.category.slug}`,
              id: `${categories.category.id}`,
            }}
          />
        ))}
      </Grid>
    </Container>
  );
}

export default BestSellingCategories;
