import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';

import { Product } from 'src/common/types';

import ProductForm from '../ProductBriefing/ProductForm';
import styles from './styles';

type Props = {
  product: Product;
  openModal: boolean;
  handleCloseModal: () => void;
};

const QuickView: React.FC<Props> = ({ product, openModal, handleCloseModal }) => {
  const handleClose = () => handleCloseModal();
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
                <ProductForm product={product} />
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
};

export default QuickView;
