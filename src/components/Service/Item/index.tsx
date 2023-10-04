import Box from '@mui/material/Box';
import SvgIcon from '@mui/material/SvgIcon';

import styles from './styles';
import { ItemTypes } from './types';

function Item({ icon, title, description, viewBox, last = false }: ItemTypes) {
  return (
    <Box
      sx={() => {
        if (last) return { ...styles.boxItem, borderRight: 'inherit' };
        return styles.boxItem;
      }}
    >
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
