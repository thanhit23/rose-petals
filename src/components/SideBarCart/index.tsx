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

import Product from './Product';
import messages from './messages';
import styles from './styles';
import { ProductCart, Props, State } from './types';

function SideBarCart({ auth, productList }: Props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      {!isEmpty(auth) && (
        <Badge badgeContent={productList.length} color="secondary" sx={styles.badge}>
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
                    {productList.length} <FormattedMessage {...messages.itemTitle} />
                  </Box>
                </Box>
                <ButtonBase onClick={handleClose} sx={styles.closeBtnBase}>
                  <CloseIcon />
                </ButtonBase>
              </Box>
              <Divider />
              {productList.map((product: ProductCart) => (
                <Product key={product._id} data={product} onClose={handleClose} />
              ))}
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
    global: { auth, product },
  } = state;
  return {
    auth,
    productList: product.cart.list,
  };
};

const withConnect = connect(mapStateToProps, null);

export default compose(withConnect)(SideBarCart);
