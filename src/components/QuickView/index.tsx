import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CloseIcon from '@mui/icons-material/Close';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { Slide } from 'react-slideshow-image';
import Rating from '@mui/material/Rating';
import { FormattedMessage } from 'react-intl';
import ButtonBase from '@mui/material/ButtonBase';
import Divider from '@mui/material/Divider';

import styles from './styles';
import messages from './messages';
import { DetailTypes } from './types';

import 'react-slideshow-image/dist/styles.css';

function QuickView({ openModal, handleCloseModal }: DetailTypes) {
  const [quantity, setQuantity] = useState(0);

  const handleClose = () => handleCloseModal();

  const handleIncrease = () => {
    if (quantity === 10) return;
    setQuantity(quantity + 1);
  };

  const handleReduce = () => {
    if (quantity === 0) return;
    setQuantity(quantity - 1);
  };

  return (
    <div>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styles.boxWrapperModal}>
          <Box>
            <Grid container spacing={3}>
              <Grid item xs={6} sx={styles.gripItem}>
                <Slide
                  autoplay={false}
                  nextArrow={
                    <Button sx={styles.nextArrow} className="btn-next-arrow">
                      <ArrowForwardIcon fontSize="small" />
                    </Button>
                  }
                  prevArrow={
                    <Button sx={styles.prevArrow} className="btn-prev-arrow">
                      <ArrowBackIcon fontSize="small" />
                    </Button>
                  }
                >
                  <Box className="each-slide-effect">
                    <Box margin="auto" width="calc(100% - 1.5rem)">
                      <Box
                        sx={styles.boxImage}
                        component="img"
                        alt="asd"
                        src="https://bazar-react.vercel.app/assets/images/products/Fashion/Clothes/1.SilverHighNeckSweater.png"
                      />
                    </Box>
                  </Box>
                  <Box className="each-slide-effect">
                    <Box margin="auto" width="calc(100% - 1.5rem)">
                      <Box
                        sx={styles.boxImage}
                        component="img"
                        alt="asd"
                        src="https://bazar-react.vercel.app/assets/images/products/Fashion/Clothes/1.SilverHighNeckSweater.png"
                      />
                    </Box>
                  </Box>
                </Slide>
              </Grid>
              <Grid item xs={6}>
                <Box component="h2" sx={styles.boxNameProduct}>
                  Silver High Neck Sweater
                </Box>
                <Box component="p" sx={styles.boxCategory}>
                  <FormattedMessage {...messages.category} />: Cosmetic
                </Box>
                <Box component="h1" sx={styles.boxPrice}>
                  $210.00
                </Box>
                <Box sx={styles.boxRatingReview}>
                  <Rating name="read-only" value={4} readOnly sx={styles.rating} />
                  <Box component="small" sx={styles.review}>
                    (0 <FormattedMessage {...messages.review} />)
                  </Box>
                </Box>
                <Box component="p" sx={styles.boxDescription}>
                  Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.
                  Morbi purus liberpuro ate vol faucibus adipiscing.
                </Box>
                <Divider sx={styles.divider} />
                {quantity ? (
                  <Box sx={styles.boxQuantity}>
                    <ButtonBase sx={styles.boxIncreaseReduce} onClick={handleReduce}>
                      <RemoveIcon />
                    </ButtonBase>
                    <Box component="h3" sx={styles.quantity}>
                      {quantity}
                    </Box>
                    <ButtonBase sx={styles.boxIncreaseReduce} onClick={handleIncrease}>
                      <AddIcon />
                    </ButtonBase>
                  </Box>
                ) : (
                  <ButtonBase sx={styles.boxAddToCart} onClick={handleIncrease}>
                    <FormattedMessage {...messages.addToCart} />
                  </ButtonBase>
                )}
              </Grid>
            </Grid>
          </Box>
          <Button sx={styles.btnClose} onClick={handleClose}>
            <CloseIcon />
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

export default QuickView;
