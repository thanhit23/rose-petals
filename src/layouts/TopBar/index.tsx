import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import { compose } from 'redux';

import { State } from 'src/common/types';
import DropDown from 'src/components/DropDown';
import store from 'src/store';

import { CHANGE_LOCALE } from './constants';
import messages from './messages';
import styles from './styles';

type Props = {
  locale: string;
};

const TopBar: React.FC<Props> = ({ locale }) => {
  const intl = useIntl();

  const menuItems = [
    {
      title: 'EN',
      sx: { color: locale === 'en' ? 'red' : null },
      value: 'en',
      onClick: () => store.dispatch({ type: CHANGE_LOCALE, payload: { locale: 'en' } }),
    },
    {
      title: 'VI',
      sx: { color: locale === 'vi' ? 'red' : null },
      value: 'vi',
      onClick: () => store.dispatch({ type: CHANGE_LOCALE, payload: { locale: 'vi' } }),
    },
  ];

  return (
    <Box sx={styles.boxTopBar}>
      <Container maxWidth="lg" sx={styles.containerTopBar}>
        <Box sx={styles.boxChip}>
          <Chip sx={styles.chipHot} label="HOT" />
          <Box component="span" sx={styles.boxExpress}>
            <FormattedMessage {...messages.shipping} />
          </Box>
        </Box>
        <Box sx={{ display: 'flex' }}>
          <DropDown
            buttonIcon
            menuItem={menuItems}
            btnSx={styles.dropDownBtn}
            buttonText={
              <Box component="span" sx={styles.boxLanguage}>
                {intl.formatMessage(locale === 'en' ? messages.language_en : messages.language_vi)}
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
};

const mapStateToProps = ({ global: { locale } }: State) => ({
  locale,
});

const withConnect = connect(mapStateToProps, null);

export default compose(withConnect)(TopBar);
