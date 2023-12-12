import React from 'react';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Box, ButtonBase } from '@mui/material';

import styles from './styles';

type Props = {
  quantity: number;
  setQuantity: (num: number) => void;
  sx?: object;
};

const QuantityButton: React.FC<Props> = ({ quantity, setQuantity, sx = {} }) => {
  const handleIncrease = () => {
    if (quantity === 10) return;
    setQuantity(quantity + 1);
  };

  const handleReduce = () => {
    if (quantity === 1) return;
    setQuantity(quantity - 1);
  };

  return (
    <Box sx={{ ...styles.boxQuantity, ...sx }}>
      <ButtonBase sx={styles.boxIncreaseReduce} onClick={handleReduce}>
        <RemoveIcon />
      </ButtonBase>
      <Box component="h3" sx={styles.quantity}>
        {quantity}
      </Box>
      <ButtonBase sx={styles.boxIncreaseReduce} onClick={handleIncrease}>
        <AddIcon />
      </ButtonBase>
    </Box>
  );
};

export default QuantityButton;
