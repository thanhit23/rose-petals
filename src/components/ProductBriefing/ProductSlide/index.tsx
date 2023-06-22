import { useState } from 'react';

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import styles from '../styles';

export default function ProductSlide() {
  const [srcImg, setSrcImg] = useState('');

  const imgItem = [
    'https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FClothes%2F21.YellowCasualSweater.png&w=3840&q=75',
    'https://bazar-react.vercel.app/assets/images/products/Fashion/Clothes/1.SilverHighNeckSweater.png',
    'https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FClothes%2F4.DenimBlueJeans.png&w=3840&q=75',
  ];
  return (
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
              marginLeft: () => (!index ? 'auto' : 0),
              marginRight: () => (index === imgItem.length - 1 ? 'auto' : '10px'),
              borderColor: () => (i === srcImg ? '#d23f57' : '#dae1e7'),
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
  );
}
