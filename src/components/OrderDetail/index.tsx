import { FormattedMessage } from 'react-intl';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import SvgIcon from '@mui/material/SvgIcon';
import DoneIcon from '@mui/icons-material/Done';
import Typography from '@mui/material/Typography';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

import styles from './styles';
import messages from './messages';
import HeaderHoldUser from '../HeaderHoldUser';
import { container, shipping, delivery } from './icons';
import OrderSummaryDetails from '../OrderSummaryDetails';

function OrderDetail() {
  const renderTick = () => (
    <Box sx={styles.wrapperDoneIcon}>
      <Avatar sx={styles.boxDoneIcon}>
        <DoneIcon />
      </Avatar>
    </Box>
  );

  return (
    <Grid item xs={12} lg={9}>
      <HeaderHoldUser
        icon={<ShoppingBagIcon fontSize="medium" />}
        title={<FormattedMessage {...messages.title} />}
        button={<FormattedMessage {...messages.orderAgain} />}
      />
      <Paper elevation={1} sx={styles.paperFormStep}>
        <Box sx={styles.boxFormStep}>
          <Box position="relative">
            <Avatar sx={styles.wrapperIcon}>
              <SvgIcon viewBox="0 0 32 32" fontSize="medium">
                {container}
              </SvgIcon>
            </Avatar>
            {renderTick()}
          </Box>
          <Box sx={styles.bridge} />
          <Box position="relative">
            <Avatar sx={styles.wrapperIcon}>
              <SvgIcon viewBox="0 0 36 36" fontSize="medium">
                {shipping}
              </SvgIcon>
            </Avatar>
          </Box>
          <Box
            sx={{
              ...styles.bridge,
              backgroundColor: '#E3E9EF',
            }}
          />
          <Box position="relative">
            <Avatar
              sx={{
                ...styles.wrapperIcon,
                backgroundColor: '#E3E9EF',
                color: '#D23F57',
              }}
            >
              <SvgIcon viewBox="0 0 32 32" fontSize="medium">
                {delivery}
              </SvgIcon>
            </Avatar>
          </Box>
        </Box>
        <Box sx={styles.boxTimeShipping}>
          <Typography sx={styles.TypographyTimeShipping}>
            <FormattedMessage {...messages.estimatedDeliveryDate} />
            <b> 4th October</b>
          </Typography>
        </Box>
      </Paper>
      <Paper sx={styles.paperList}>
        <Paper sx={styles.paperHeader}>
          <Box sx={styles.boxTitleHeader}>
            <Typography sx={styles.boxTitleItem}>
              <FormattedMessage {...messages.orderID} />
            </Typography>
            <Typography sx={styles.boxTitleItemContent}>f0ba538b-c8f3-45ce-b6c1-209cf07ba5f8</Typography>
          </Box>
          <Box sx={styles.boxTitleHeader}>
            <Typography sx={styles.boxTitleItem}>
              <FormattedMessage {...messages.placedOn} />
            </Typography>
            <Typography sx={styles.boxTitleItemContent}>10 Nov, 2022</Typography>
          </Box>
          <Box sx={styles.boxTitleHeader}>
            <Typography sx={styles.boxTitleItem}>
              <FormattedMessage {...messages.deliveredOn} />
            </Typography>
            <Typography sx={styles.boxTitleItemContent}>26 Mar, 2023</Typography>
          </Box>
        </Paper>
        <Box sx={styles.containerProduct}>
          <Box sx={styles.wrapperProduct}>
            <Box sx={styles.boxImageProduct}>
              <Avatar
                alt="Remy Sharp"
                src="https://bazar-react.vercel.app/assets/images/products/Automotive/2.Audi2017.png"
                sx={styles.avatarProduct}
              />
              <Box marginLeft="20px">
                <Box component="h6" sx={styles.nameProduct}>
                  Budi 2017
                </Box>
                <Typography sx={styles.priceProduct}>$226.00 x 4</Typography>
              </Box>
            </Box>
            <Box sx={styles.boxDescriptionProduct}>
              <Typography sx={styles.descriptionProduct}>
                <FormattedMessage {...messages.productProperties} /> Black, L
              </Typography>
            </Box>
            <Box sx={styles.boxWriteReview}>
              <Button variant="text" sx={styles.btnWriteReview}>
                <Typography sx={styles.typographyWriteReview}>
                  <FormattedMessage {...messages.btnWriteReview} />
                </Typography>
              </Button>
            </Box>
          </Box>
          <Box sx={styles.wrapperProduct}>
            <Box sx={styles.boxImageProduct}>
              <Avatar
                alt="Remy Sharp"
                src="https://bazar-react.vercel.app/assets/images/products/Automotive/2.Audi2017.png"
                sx={styles.avatarProduct}
              />
              <Box marginLeft="20px">
                <Box component="h6" sx={styles.nameProduct}>
                  Budi 2017
                </Box>
                <Typography sx={styles.priceProduct}>$226.00 x 4</Typography>
              </Box>
            </Box>
            <Box sx={styles.boxDescriptionProduct}>
              <Typography sx={styles.descriptionProduct}>
                <FormattedMessage {...messages.productProperties} /> Black, L
              </Typography>
            </Box>
            <Box sx={styles.boxWriteReview}>
              <Button variant="text" sx={styles.btnWriteReview}>
                <Typography sx={styles.typographyWriteReview}>
                  <FormattedMessage {...messages.btnWriteReview} />
                </Typography>
              </Button>
            </Box>
          </Box>
          <Box sx={styles.wrapperProduct}>
            <Box sx={styles.boxImageProduct}>
              <Avatar
                alt="Remy Sharp"
                src="https://bazar-react.vercel.app/assets/images/products/Automotive/2.Audi2017.png"
                sx={styles.avatarProduct}
              />
              <Box marginLeft="20px">
                <Box component="h6" sx={styles.nameProduct}>
                  Budi 2017
                </Box>
                <Typography sx={styles.priceProduct}>$226.00 x 4</Typography>
              </Box>
            </Box>
            <Box sx={styles.boxDescriptionProduct}>
              <Typography sx={styles.descriptionProduct}>
                <FormattedMessage {...messages.productProperties} /> Black, L
              </Typography>
            </Box>
            <Box sx={styles.boxWriteReview}>
              <Button variant="text" sx={styles.btnWriteReview}>
                <Typography sx={styles.typographyWriteReview}>
                  <FormattedMessage {...messages.btnWriteReview} />
                </Typography>
              </Button>
            </Box>
          </Box>
        </Box>
      </Paper>
      <Grid container spacing={{ xs: 3 }}>
        <OrderSummaryDetails />
      </Grid>
    </Grid>
  );
}

export default OrderDetail;
