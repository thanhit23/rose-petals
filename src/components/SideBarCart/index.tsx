import React from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

import CloseIcon from '@mui/icons-material/Close';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonBase from '@mui/material/ButtonBase';
import Divider from '@mui/material/Divider';
import Modal from '@mui/material/Modal';
import Paper from '@mui/material/Paper';
import { isEmpty } from 'lodash';
import { compose } from 'redux';

import { State } from 'src/common/types';

import Product from './Product';
import messages from './messages';
import styles from './styles';
import { ProductCart, Props } from './types';

const SideBarCart: React.FC<Props> = ({ auth, productList, onDeleteProduct }) => {
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
          <Box width="360px">
            <Box overflow="auto" height="calc((100vh - 80px) - 3.25rem)">
              <Box sx={styles.boxTitlePaper}>
                <Box sx={styles.wrapperTitleCart}>
                  <ShoppingBagOutlinedIcon color="action" />
                  {productList.length > 0 ? (
                    <Box component="p" sx={styles.itemListCart}>
                      {productList.length} <FormattedMessage {...messages.itemTitle} />
                    </Box>
                  ) : (
                    <FormattedMessage {...messages.itemTitleEmpty} />
                  )}
                </Box>
                <ButtonBase onClick={handleClose} sx={styles.closeBtnBase}>
                  <CloseIcon />
                </ButtonBase>
              </Box>
              <Divider />
              {productList.length > 0 ? (
                productList.map((product: ProductCart) => (
                  <Product key={product._id} data={product} onDeleteProduct={onDeleteProduct} />
                ))
              ) : (
                <Box className="title-cart-empty">
                  <Avatar
                    src="https://media.istockphoto.com/id/841884438/vi/vec-to/bi%E1%BB%83u-t%C6%B0%E1%BB%A3ng-empty-shopping-bag-d%E1%BB%85-th%C6%B0%C6%A1ng-th%E1%BA%A5t-v%E1%BB%8Dng-t%C3%BAi-mua-s%E1%BA%AFm-thi%E1%BA%BFt-k%E1%BA%BF-%C4%91%C6%B0%E1%BB%9Dng-m%E1%BB%8Fng-ph%E1%BA%B3ng-minh.jpg?s=612x612&w=0&k=20&c=FhRssii1J4Hn4nuCQ-AhDBn0vmWGZwfu74j6boF2t7g="
                    sx={{ width: 250, height: 250 }}
                  />
                </Box>
              )}
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
};

const mapStateToProps = ({
  global: {
    auth,
    product: {
      cart: { list },
    },
  },
}: State) => ({
  auth,
  productList: list,
});

const withConnect = connect(mapStateToProps, null);

export default compose(withConnect)(SideBarCart);
