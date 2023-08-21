import React from 'react';
import { Link } from 'react-router-dom';

import CloseIcon from '@mui/icons-material/Close';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonBase from '@mui/material/ButtonBase';

import { PATH_AUTH } from 'src/routes/paths';

import styles from './styles';

function Product({ onClose }: { onClose: () => void }) {
  const [counter, setCounter] = React.useState(0);

  const handleIncrement = () => {
    if (counter < 10) setCounter(counter + 1);
  };

  const handleDecrement = () => {
    if (counter > 0) setCounter(counter - 1);
  };

  return (
    <Box sx={styles.containerProduct}>
      <Box sx={styles.boxWrapBtnPlusMinus}>
        <Button onClick={handleIncrement} sx={styles.btnPlusMinus}>
          +
        </Button>
        <Box sx={styles.boxCounter}>{counter}</Box>
        <Button onClick={handleDecrement} sx={styles.btnPlusMinus}>
          -
        </Button>
      </Box>
      <Link to="/#">
        <Avatar
          src="https://bazar-react.vercel.app/assets/images/products/Fashion/Clothes/1.SilverHighNeckSweater.png"
          sx={styles.avatar}
        />
      </Link>
      <Box sx={styles.boxInformationProduct}>
        <Link to={PATH_AUTH.login} style={styles.linkNameProduct}>
          <Box component="h5" sx={styles.boxNameProduct}>
            Silver High Neck Sweater
          </Box>
        </Link>
        <Box component="small" sx={styles.boxPrice}>
          $210.00 x 2
        </Box>
        <Box sx={styles.boxTotalPrice}>$456</Box>
      </Box>
      <ButtonBase onClick={() => onClose()} sx={styles.buttonBaseClose}>
        <CloseIcon />
      </ButtonBase>
    </Box>
  );
}

export default Product;
