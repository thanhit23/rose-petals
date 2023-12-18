import { FormattedMessage, useIntl } from 'react-intl';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import ItemSell from './ItemSell';
import messages from './messages';
import styles from './styles';

function BestSellingCategories() {
  const t = useIntl();

  const categories = [
    {
      title: t.formatMessage({ ...messages.menFashion }),
      srcImg: 'https://fashinza.com/textile/wp-content/uploads/2023/02/Turtle-Necks-683x1024.jpg',
      category: {
        name: 'Thời Trang Nam',
        id: '6500791355ee920008ef5f27',
        slug: 'thoi-trang-nam',
      },
    },
    {
      title: t.formatMessage({ ...messages.womenFashion }),
      srcImg:
        'https://img.freepik.com/free-photo/fashionable-pale-brunette-long-green-dress-black-jacket-sunglasses-standing-street-during-daytime-against-wall-light-city-building_197531-24468.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1702771200&semt=ais',
      category: {
        name: 'Thời Trang Nữ',
        id: '6500792255ee920008ef5f2b',
        slug: 'thoi-trang-nu',
      },
    },
    {
      title: t.formatMessage({ ...messages.walletBag }),
      srcImg:
        'https://authentic-shoes.com/wp-content/uploads/2023/05/marmont_8efa64633ced4d1ebf9c0087e13c40a1_2048x2048.jpg',
      category: {
        name: 'Túi Ví',
        id: '657fa9feb2afcf0008d338c3',
        slug: 'tui-vi',
      },
    },
    {
      title: t.formatMessage({ ...messages.footwear }),
      srcImg:
        'https://dynamic.zacdn.com/XnZ6N4gtKWz0v9N_lBlDLwdNssI=/filters:quality(70):format(webp)/https://static-sg.zacdn.com/p/twenty-eight-shoes-8938-9795313-4.jpg',
      category: {
        name: 'Giày Dép',
        id: '657fa9e9b2afcf0008d338bc',
        slug: 'giay-dep',
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
              name: categories.category.name,
              slug: categories.category.slug,
              id: categories.category.id,
            }}
          />
        ))}
      </Grid>
    </Container>
  );
}

export default BestSellingCategories;
