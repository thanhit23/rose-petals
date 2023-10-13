import { useEffect, useState } from 'react';

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import styles from '../styles';
import { ImageProps } from '../types';

export default function ProductSlide({ images }: ImageProps) {
  const [srcImg, setSrcImg] = useState('');
  useEffect(() => {
    setSrcImg(images[0].fullUrl);
  }, [images]);
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
        {images.map((item, index) => (
          <Button
            key={index}
            sx={() => ({
              ...styles.boxImgItem,
              marginLeft: () => (!index ? 'auto' : 0),
              marginRight: () => (index === images.length - 1 ? 'auto' : '10px'),
              borderColor: () => (item.fullUrl === srcImg ? '#d23f57' : '#dae1e7'),
            })}
            onClick={() => setSrcImg(item.fullUrl)}
          >
            <Box>
              <Avatar src={item.fullUrl} />
            </Box>
          </Button>
        ))}
      </Box>
    </Grid>
  );
}
