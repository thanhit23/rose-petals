import React from 'react';
import { FormattedMessage } from 'react-intl';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Badge from '@mui/material/Badge';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import CloseIcon from '@mui/icons-material/Close';
import ButtonBase from '@mui/material/ButtonBase';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

import styles from './styles';
import Product from './Product';
import messages from './messages';

export default function CartButton() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Badge badgeContent={3} color="secondary" sx={styles.badge}>
        <Button onClick={handleOpen} sx={styles.btnCart}>
          <ShoppingBagOutlinedIcon color="action" />
        </Button>
      </Badge>
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
              <Product />
              <Product />
              <Product />
            </Box>
            <Box sx={{ padding: '20px' }}>
              <Button href="/login" variant="contained" sx={styles.btnCheckoutNow}>
                <FormattedMessage {...messages.btnCheckoutNow} />
              </Button>
              <Button href="/login" variant="outlined" sx={styles.btnOutlined}>
                <FormattedMessage {...messages.btnOutlined} />
              </Button>
            </Box>
          </Box>
        </Paper>
      </Modal>
    </div>
  );
}
