import React from 'react';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { ListCategory } from 'src/common/types';
import { PATH_PUBLIC } from 'src/routes/paths';

import styles from './styles';

type Props = {
  srcImg: string;
  title: JSX.Element;
  categories: ListCategory;
};

const ItemSell: React.FC<Props> = ({ srcImg, title, categories }: Props) => (
  <Grid item xs={12} sm={6} md={3}>
    <Link to={PATH_PUBLIC.product.search(`${categories?.slug}?best_selling=true&category=${categories.id}`)}>
      <Box sx={styles.boxWrapperItem}>
        <Box height="100%">
          <Box component="img" sx={styles.boxComponentImg} alt="The house from the offer." src={srcImg} />
        </Box>
        <Box sx={styles.boxWrapperTitle}>
          <Box component="h4" sx={styles.title}>
            {title}
          </Box>
        </Box>
      </Box>
    </Link>
  </Grid>
);

export default ItemSell;
