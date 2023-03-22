import { useState } from 'react';
import { FormattedMessage } from 'react-intl';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';

import styles from './styles';
import messages from './messages';

function ProductBriefing() {
  const [srcImg, setSrcImg] = useState('');
  const [colorType, setColorType] = useState(0);
  const [colorOption, setColorOption] = useState(0);

  const imgItem = [
    'https://bazar-react.vercel.app/assets/images/products/Fashion/Clothes/1.SilverHighNeckSweater.png',
    'https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FClothes%2F21.YellowCasualSweater.png&w=3840&q=75',
    'https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FClothes%2F4.DenimBlueJeans.png&w=3840&q=75',
  ];

  const handleChangeColor = (condition: boolean, colorDefault?: string, colorActive?: string) =>
    condition ? colorDefault || '#D23F57' : colorActive || '#00000014';

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Box sx={styles.boxContainerImg}>
            <Box sx={styles.boxWrapperImg}>
              <Box
                component="img"
                src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27300%27%20height=%27300%27/%3e"
              />
              <Box component="img" src={srcImg} sx={styles.boxImg} />
            </Box>
          </Box>
          <Box display="flex" overflow="auto">
            {imgItem.map((i, index) => (
              <Button
                key={index}
                sx={() => ({
                  ...styles.boxImgItem,
                  marginLeft: () => {
                    if (!index) return 'auto';
                    return 0;
                  },
                  marginRight: () => {
                    if (index === imgItem.length - 1) return 'auto';
                    return '10px';
                  },
                  borderColor: () => {
                    if (i === srcImg) return '#d23f57';
                    return '#dae1e7';
                  },
                })}
                onClick={() => setSrcImg(i)}
              >
                <Box>
                  <Avatar src={i} />
                </Box>
              </Button>
            ))}
          </Box>
        </Grid>
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
      </Grid>
    </>
  );
}

export default ProductBriefing;
