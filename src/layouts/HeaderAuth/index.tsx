import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, Typography } from '@mui/material';

import messages from './messages';
import styles from './styles';

function HeaderAuth() {
  return (
    <Box sx={styles.headerContainer}>
      <Box sx={styles.boxBackHome}>
        <Box sx={styles.itemBackHome}>
          <Link to="/">
            <Box sx={styles.flexItem}>
              <ArrowBackIcon sx={styles.iconHeader} />
              <Typography component="h1" variant="h5">
                <FormattedMessage {...messages.home} />
              </Typography>
            </Box>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
export default HeaderAuth;
