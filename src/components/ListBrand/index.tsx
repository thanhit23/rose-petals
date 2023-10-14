import React from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';

import { Brand } from 'src/common/types';

import SlideProduct from '../SlideProduct';
import styles from './styles';

type Props = {
  listBrand: Brand[];
};

const ListBrand: React.FC<Props> = ({ listBrand }) => (
  <Container sx={styles.container}>
    <Divider sx={styles.dividerTop} />
    <Box sx={styles.boxSlide}>
      <SlideProduct slidesToShow={listBrand.length} autoplay arrows={false}>
        {listBrand.map(({ logo }, key: number) => (
          <Box key={key} sx={styles.boxImg}>
            <Box component="img" src={logo} sx={styles.img} />
          </Box>
        ))}
      </SlideProduct>
    </Box>
    <Divider sx={styles.dividerBottom} />
  </Container>
);

export default ListBrand;
