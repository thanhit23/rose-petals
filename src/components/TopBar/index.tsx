import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

import styles from './styles';
import messages from './messages';
import DropDown from '../DropDown';

function TopBar() {
  return (
    <Box sx={styles.boxTopBar}>
      <Container maxWidth="lg" sx={styles.containerTopBar}>
        <Box sx={styles.boxChip}>
          <Chip sx={styles.chipHot} label="HOT" />
          <Box component="span" sx={styles.boxExpress}>
            Free Express Shipping
          </Box>
        </Box>
        <Box sx={{ display: 'flex' }}>
          <DropDown
            buttonIcon
            menuItem={[{ title: 'EN' }, { title: 'DE' }]}
            btnSx={styles.dropDownBtn}
            buttonText={
              <Box component="span" sx={styles.boxLanguage}>
                <FormattedMessage {...messages.language} />
              </Box>
            }
            buttonIconSx={{ fontSize: '0.875rem' }}
          />
          <Box sx={styles.boxLink}>
            <Link to="#" style={styles.linkSocialNetwork}>
              <TwitterIcon sx={styles.iconSocialNetwork} />
            </Link>
            <Link to="#" style={styles.linkSocialNetwork}>
              <FacebookIcon sx={styles.iconSocialNetwork} />
            </Link>
            <Link to="#" style={styles.linkSocialNetwork}>
              <InstagramIcon sx={styles.iconSocialNetwork} />
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default TopBar;
