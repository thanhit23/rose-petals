import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import styles from './styles';
import { HeaderHoldUserType } from './types';

function HeaderHoldUser({ icon, title, button, path = '/' }: HeaderHoldUserType) {
  return (
    <Box sx={styles.containerTitle}>
      <Box sx={styles.wrapperTitle}>
        <Box sx={styles.boxTitle}>
          {icon}
          <Box component="h2" sx={styles.title}>
            {title}
          </Box>
        </Box>
        <Link to={path}>
          <Button variant="contained" sx={styles.btnOrderAgain}>
            {button}
          </Button>
        </Link>
      </Box>
    </Box>
  );
}

export default HeaderHoldUser;
