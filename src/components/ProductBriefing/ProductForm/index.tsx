import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';

import { Product } from 'src/common/types';
import QuantityButton from 'src/components/QuantityButton';
import formatterPrice from 'src/helpers/formatPrice';

import messages from '../messages';
import styles from '../styles';
import { InitialState } from './types';

type Props = {
  product?: Product;
};

const initialState: InitialState = {
  sizes: '',
  colors: '',
};

const ProductForm: React.FC<Props> = ({ product }) => {
  const [colorType, setColorType] = useState<InitialState>(initialState);

  const [quantity, setQuantity] = useState<number>(1);

  const sizes = [{ label: 'M' }, { label: 'L' }, { label: 'XL' }];

  const colors = [{ label: 'Blue' }, { label: 'Red', id: 2 }, { label: 'Green' }];

  const handleChangeColor = (condition: boolean, colorDefault?: string, colorActive?: string) =>
    condition ? colorDefault || '#D23F57' : colorActive || '#00000014';

  const handleSubmit = () => {
    console.log({
      name: product?.name,
      price: product?.price,
      quantity,
      color: colorType.colors,
      size: colorType.sizes,
    });
  };

  return (
    <Grid item xs={12} md={6} sx={{ maxWidth: { sm: '100%' } }}>
      <Box component="h1" sx={styles.boxTitle}>
        {product?.name}
      </Box>
      <Box sx={styles.wrapBrandRating}>
        <Box sx={styles.boxWrapBrand}>
          <Box>Brand:</Box>
          <Box component="h6" sx={styles.boxBrand}>
            {product?.brand.name}
          </Box>
        </Box>
        <Box sx={styles.boxRated}>
          <Box lineHeight={1}>Rated:</Box>
          <Box sx={styles.wrapRating}>
            <Rating name="read-only" value={4} readOnly sx={styles.rating} />
          </Box>
          <Box component="h6" sx={styles.quantityRating}>
            (50)
          </Box>
        </Box>
      </Box>
      <Box marginBottom="16px">
        <Box component="h6" sx={styles.boxType}>
          Size
        </Box>
        <Box>
          {sizes.map(({ label }, index) => (
            <Chip
              label={label}
              key={index}
              onClick={() => setColorType(prev => ({ ...prev, sizes: label }))}
              sx={{
                ...styles.typeItem,
                backgroundColor: handleChangeColor(colorType.sizes === label),
                color: handleChangeColor(colorType.sizes === label, '#fff', '#000000de'),
                '&:hover': {
                  backgroundColor: () => (colorType.sizes === label ? '#E3364E' : '#0000001f'),
                },
              }}
            />
          ))}
        </Box>
      </Box>
      <Box marginBottom="16px">
        <Box component="h6" sx={styles.boxType}>
          Color
        </Box>
        <Box>
          {colors.map(({ label }, index) => (
            <Chip
              label={label}
              key={index}
              onClick={() => setColorType(prev => ({ ...prev, colors: label }))}
              sx={{
                ...styles.typeItem,
                backgroundColor: handleChangeColor(colorType.colors === label),
                color: handleChangeColor(colorType.colors === label, '#fff', '#000000de'),
                '&:hover': {
                  backgroundColor: () => (colorType.colors === label ? '#E3364E' : '#0000001f'),
                },
              }}
            />
          ))}
        </Box>
      </Box>
      <Box sx={styles.wrapPrice}>
        <Box component="h2" sx={styles.boxPrice}>
          {formatterPrice.format(product?.price || 0)}
        </Box>
        <QuantityButton quantity={quantity} setQuantity={setQuantity} />
      </Box>

      <Button variant="contained" sx={styles.btnAddCart} onClick={handleSubmit}>
        <FormattedMessage {...messages.btnAddCart} />
      </Button>
    </Grid>
  );
};

export default ProductForm;
