import React from 'react';

import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

import styles from './styles';
import { Props } from './types';

const ModalSeeImage: React.FC<Props> = ({ openModal, handleCloseModal, image }: Props) => {
  const handleClose = () => handleCloseModal();

  return (
    <Modal
      open={openModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={styles.boxWrapperModal}>
        <Box>
          <Box component={'img'} src={image} alt="Image" sx={styles.boxImage} />
        </Box>
        <Button sx={styles.btnClose} onClick={handleClose}>
          <CloseIcon />
        </Button>
      </Box>
    </Modal>
  );
};

export default ModalSeeImage;
