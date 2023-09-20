import { useState } from 'react';
import { FormattedMessage } from 'react-intl';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';

import messages from '../messages';
import styles from '../styles';

export default function ProductForm() {
  const [colorType, setColorType] = useState(0);
  const sizes = [
    { label: 'M', id: 1 },
    { label: 'L', id: 2 },
    { label: 'XL', id: 3 },
  ];
  const handleChangeColor = (condition: boolean, colorDefault?: string, colorActive?: string) =>
    condition ? colorDefault || '#D23F57' : colorActive || '#00000014';

  return (
    <Grid item xs={12} md={6}>
      <Box component="h1" sx={styles.boxTitle}>
        SIlver High Neck Sweater
      </Box>
      <Box sx={styles.boxWrapBrand}>
        <Box>Brand:</Box>
        <Box component="h6" sx={styles.boxBrand}>
          Xiaomi
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
      <Box marginBottom="16px">
        <Box component="h6" sx={styles.boxType}>
          Size
        </Box>
        <Box>
          {sizes.map(({ label, id }, index) => (
            <Chip
              label={label}
              key={index}
              onClick={() => setColorType(id)}
              sx={{
                ...styles.typeItem,
                backgroundColor: handleChangeColor(colorType === id),
                color: handleChangeColor(colorType === id, '#fff', '#000000de'),
                '&:hover': {
                  backgroundColor: () => (colorType === id ? '#E3364E' : '#0000001f'),
                },
              }}
            />
          ))}
        </Box>
      </Box>
      <Box sx={styles.wrapPrice}>
        <Box component="h2" sx={styles.boxPrice}>
          $258.00
        </Box>
        <Box>Stock Available</Box>
      </Box>
      <Button variant="contained" sx={styles.btnAddCart}>
        <FormattedMessage {...messages.btnAddCart} />
      </Button>
    </Grid>
  );
}
