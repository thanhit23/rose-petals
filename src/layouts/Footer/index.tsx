import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import SvgIcon from '@mui/material/SvgIcon';
import styled from 'styled-components';

import logo from 'src/resources/images/logo.png';

import icons from './icons';
import messages from './messages';
import styles from './styles';

const LinkStyles = styled(Link)`
  display: block;
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  padding: 0.3rem 0;
  color: #aeb4be;
`;

function Footer() {
  return (
    <footer>
      <Box sx={styles.boxFooter}>
        <Container maxWidth="lg" sx={styles.containerFooter}>
          <Box sx={styles.wrapperGrid}>
            <Grid container spacing={{ xs: 3 }}>
              <Grid item xs={12} sm={6} md={6} lg={4}>
                <Box sx={styles.flexBox}>
                  <Link to="/">
                    <Box sx={styles.boxLogo}>
                      <img width="60" height="60" src={logo} />
                    </Box>
                  </Link>
                  <Box component="h3">
                    <FormattedMessage {...messages.nameShop} />
                  </Box>
                </Box>
                <Box component="p" sx={styles.boxDescription}>
                  <FormattedMessage {...messages.description} />
                </Box>
                <Box sx={styles.boxDownload}>
                  <Link to="#" target="_blank">
                    <Box sx={styles.boxDownloadCHPlay}>
                      <SvgIcon viewBox="0 0 24 24">{icons.chPlayIcon}</SvgIcon>
                      <Box>
                        <Box fontSize="8px" fontWeight={600} lineHeight={1}>
                          <FormattedMessage {...messages.getItOn} />
                        </Box>
                        <Box fontSize="14px" fontWeight="900">
                          <FormattedMessage {...messages.googlePlay} />
                        </Box>
                      </Box>
                    </Box>
                  </Link>
                  <Link to="#" target="_blank">
                    <Box sx={styles.boxDownloadAppStore}>
                      <SvgIcon viewBox="0 0 24 24">{icons.appStoreIcon}</SvgIcon>
                      <Box>
                        <Box fontSize="8px" fontWeight={600} lineHeight={1}>
                          <FormattedMessage {...messages.downloadOnThe} />
                        </Box>
                        <Box fontSize="14px" fontWeight={900}>
                          <FormattedMessage {...messages.appStore} />
                        </Box>
                      </Box>
                    </Box>
                  </Link>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={2}>
                <Box sx={styles.boxTitleAboutUs}>
                  <FormattedMessage {...messages.aboutUs} />
                </Box>
                <div>
                  <LinkStyles to="#">
                    <FormattedMessage {...messages.careers} />
                  </LinkStyles>
                  <LinkStyles to="#">
                    <FormattedMessage {...messages.ourStores} />
                  </LinkStyles>
                  <LinkStyles to="#">
                    <FormattedMessage {...messages.ourCares} />
                  </LinkStyles>
                  <LinkStyles to="#">
                    <FormattedMessage {...messages.termsConditions} />
                  </LinkStyles>
                  <LinkStyles to="#">
                    <FormattedMessage {...messages.privacyPolicy} />
                  </LinkStyles>
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={3}>
                <Box sx={styles.boxTitleAboutUs}>
                  <FormattedMessage {...messages.customerCare} />
                </Box>
                <div>
                  <LinkStyles to="#">
                    <FormattedMessage {...messages.helpCenter} />
                  </LinkStyles>
                  <LinkStyles to="#">
                    <FormattedMessage {...messages.howToBuy} />
                  </LinkStyles>
                  <LinkStyles to="#">
                    <FormattedMessage {...messages.trackYourOrder} />
                  </LinkStyles>
                  <LinkStyles to="#">
                    <FormattedMessage {...messages.corporate} />
                  </LinkStyles>
                  <LinkStyles to="#">
                    <FormattedMessage {...messages.returnsRefunds} />
                  </LinkStyles>
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={3}>
                <Box sx={styles.boxTitleAboutUs}>
                  <FormattedMessage {...messages.contactUs} />
                </Box>
                <Box sx={styles.boxAddress}>
                  <FormattedMessage {...messages.address} />
                </Box>
                <Box sx={styles.boxEmail}>
                  <FormattedMessage {...messages.email} />
                </Box>
                <Box sx={styles.boxPhoneNumber}>
                  <FormattedMessage {...messages.phone} />
                </Box>
                <Box sx={styles.boxSocialNetwork}>
                  <Link to="#" target="_blank" rel="Social Network">
                    <ButtonBase sx={styles.btnSocialNetwork}>
                      <SvgIcon fontSize="inherit" viewBox="0 0 8 14">
                        {icons.facebookIcon}
                      </SvgIcon>
                    </ButtonBase>
                  </Link>
                  <Link to="#" target="_blank" rel="Social Network">
                    <ButtonBase sx={styles.btnSocialNetwork}>
                      <SvgIcon fontSize="inherit" viewBox="0 0 10 14">
                        {icons.twitterIcon}
                      </SvgIcon>
                    </ButtonBase>
                  </Link>
                  <Link to="#" target="_blank" rel="Social Network">
                    <ButtonBase sx={styles.btnSocialNetwork}>
                      <SvgIcon fontSize="inherit" viewBox="0 0 15 11">
                        {icons.youtubeIcon}
                      </SvgIcon>
                    </ButtonBase>
                  </Link>
                  <Link to="#" target="_blank" rel="Social Network">
                    <ButtonBase sx={styles.btnSocialNetwork}>
                      <SvgIcon fontSize="inherit" viewBox="0 0 14 14">
                        {icons.googleIcon}
                      </SvgIcon>
                    </ButtonBase>
                  </Link>
                  <Link to="#" target="_blank" rel="Social Network">
                    <ButtonBase sx={styles.btnSocialNetwork}>
                      <SvgIcon fontSize="inherit" viewBox="0 0 14 14">
                        {icons.instagramIcon}
                      </SvgIcon>
                    </ButtonBase>
                  </Link>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </footer>
  );
}

export default Footer;
