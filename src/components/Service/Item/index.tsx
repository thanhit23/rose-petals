import SvgIcon from '@mui/material/SvgIcon';
import Box from '@mui/material/Box';

import { ItemTypes } from './types';
import styles from './styles';

function Item({ icon, title, description, viewBox }: ItemTypes) {
  return (
    <Box sx={styles.boxItem}>
      <SvgIcon component="svg" viewBox={viewBox} sx={styles.svgIcon}>
        {icon}
      </SvgIcon>
      <Box>
        <Box component="h4" sx={styles.boxTitle}>
          {title}
        </Box>
        <Box component="span" sx={styles.boxDescription}>
          {description}
        </Box>
      </Box>
    </Box>
  );
}

export default Item;
