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

  const [colorOption, setColorOption] = useState(0);

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
        <Box component="h6" sx={styles.option}>
          Option
        </Box>
        <Box>
          <Chip
            label="option 1"
            onClick={() => setColorOption(1)}
            sx={{
              ...styles.optionItem,
              backgroundColor: handleChangeColor(colorOption === 1),
              color: handleChangeColor(colorOption === 1, '#fff', '#000000de'),
              '&:hover': {
                backgroundColor: () => (colorOption === 1 ? '#E3364E' : '#0000001f'),
              },
            }}
          />
          <Chip
            label="option 2"
            onClick={() => setColorOption(2)}
            sx={{
              ...styles.optionItem,
              backgroundColor: handleChangeColor(colorOption === 2),
              color: handleChangeColor(colorOption === 2, '#fff', '#000000de'),
              '&:hover': {
                backgroundColor: () => (colorOption === 2 ? '#E3364E' : '#0000001f'),
              },
            }}
          />
          <Chip
            label="option 3"
            onClick={() => setColorOption(3)}
            sx={{
              ...styles.optionItem,
              backgroundColor: handleChangeColor(colorOption === 3),
              color: handleChangeColor(colorOption === 3, '#fff', '#000000de'),
              '&:hover': {
                backgroundColor: () => (colorOption === 3 ? '#E3364E' : '#0000001f'),
              },
            }}
          />
          <Chip
            label="option 4"
            onClick={() => setColorOption(4)}
            sx={{
              ...styles.optionItem,
              backgroundColor: handleChangeColor(colorOption === 4),
              color: handleChangeColor(colorOption === 4, '#fff', '#000000de'),
              '&:hover': {
                backgroundColor: () => (colorOption === 4 ? '#E3364E' : '#0000001f'),
              },
            }}
          />
        </Box>
      </Box>
      <Box marginBottom="16px">
        <Box component="h6" sx={styles.boxType}>
          Type
        </Box>
        <Box>
          <Chip
            label="type 1"
            onClick={() => setColorType(1)}
            sx={{
              ...styles.typeItem,
              backgroundColor: handleChangeColor(colorType === 1),
              color: handleChangeColor(colorType === 1, '#fff', '#000000de'),
              '&:hover': {
                backgroundColor: () => (colorType === 1 ? '#E3364E' : '#0000001f'),
              },
            }}
          />
          <Chip
            label="type 2"
            onClick={() => setColorType(2)}
            sx={{
              ...styles.typeItem,
              backgroundColor: handleChangeColor(colorType === 2),
              color: handleChangeColor(colorType === 2, '#fff', '#000000de'),
              '&:hover': {
                backgroundColor: () => (colorType === 2 ? '#E3364E' : '#0000001f'),
              },
            }}
          />
          <Chip
            label="type 3"
            onClick={() => setColorType(3)}
            sx={{
              ...styles.typeItem,
              backgroundColor: handleChangeColor(colorType === 3),
              color: handleChangeColor(colorType === 3, '#fff', '#000000de'),
              '&:hover': {
                backgroundColor: () => (colorType === 3 ? '#E3364E' : '#0000001f'),
              },
            }}
          />
          <Chip
            label="type 4"
            onClick={() => setColorType(4)}
            sx={{
              ...styles.typeItem,
              backgroundColor: handleChangeColor(colorType === 4),
              color: handleChangeColor(colorType === 4, '#fff', '#000000de'),
              '&:hover': {
                backgroundColor: () => (colorType === 4 ? '#E3364E' : '#0000001f'),
              },
            }}
          />
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
