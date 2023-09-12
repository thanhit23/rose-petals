import React from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

import CloseIcon from '@mui/icons-material/Close';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonBase from '@mui/material/ButtonBase';
import Divider from '@mui/material/Divider';
import Modal from '@mui/material/Modal';
import Paper from '@mui/material/Paper';
import { isEmpty } from 'lodash';
import { compose } from 'redux';

import { Auth } from 'src/containers/Authenticated/types';
import { State } from 'src/layouts/Header/UserButton/types';

import Product from './Product';
import messages from './messages';
import styles from './styles';

function SideBarCart({ auth }: Auth) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      {!isEmpty(auth) && (
        <Badge badgeContent={3} color="secondary" sx={styles.badge}>
          <Button onClick={handleOpen} sx={styles.btnCart}>
            <ShoppingBagOutlinedIcon color="action" />
          </Button>
        </Badge>
      )}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Paper elevation={0} sx={styles.paperCart}>
          <Box width="100%" maxWidth="380px">
            <Box overflow="auto" height="calc((100vh - 80px) - 3.25rem)">
              <Box sx={styles.boxTitlePaper}>
                <Box sx={styles.wrapperTitleCart}>
                  <ShoppingBagOutlinedIcon color="action" />
                  <Box component="p" sx={styles.itemListCart}>
                    4 <FormattedMessage {...messages.itemTitle} />
                  </Box>
                </Box>
                <ButtonBase onClick={handleClose} sx={styles.closeBtnBase}>
                  <CloseIcon />
                </ButtonBase>
              </Box>
              <Divider />
              <Product onClose={handleClose} />
              <Product onClose={handleClose} />
              <Product onClose={handleClose} />
            </Box>
            <Box sx={{ padding: '20px' }}>
              <Button href="/checkout" variant="contained" sx={styles.btnCheckoutNow}>
                <FormattedMessage {...messages.btnCheckoutNow} />
              </Button>
              <Button href="/cart" variant="outlined" sx={styles.btnOutlined}>
                <FormattedMessage {...messages.btnViewCart} />
              </Button>
            </Box>
          </Box>
        </Paper>
      </Modal>
    </div>
  );
}

const mapStateToProps = (state: State) => {
  const {
    global: { auth },
  } = state;
  return {
    auth,
  };
};

const withConnect = connect(mapStateToProps, null);

export default compose(withConnect)(SideBarCart);
