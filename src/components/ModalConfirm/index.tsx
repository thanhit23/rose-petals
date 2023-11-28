import React from 'react';
import { FormattedMessage } from 'react-intl';

import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';

import messages from './messages';
import styles from './styles';

type Props = {
  openModal: boolean;
  handleCloseModal: () => void;
  onConfirm: () => void;
  content: string | React.JSX.Element;
};

const ModalConfirm: React.FC<Props> = ({ content, onConfirm, openModal, handleCloseModal }) => {
  const handleClose = () => handleCloseModal();

  const handleConfirm = () => {
    onConfirm();
    handleCloseModal();
  };

  return (
    <div>
      <Modal open={openModal} onClose={handleClose}>
        <Box sx={styles.modalConfirm}>
          <Typography variant="h6" component="h2">
            <FormattedMessage {...messages.titleModalConfirm} />
          </Typography>
          <Typography sx={{ mt: 2 }}>{content}</Typography>
          <Box sx={styles.boxControl}>
            <Button sx={styles.boxCancel} onClick={handleClose}>
              <FormattedMessage {...messages.btnCancel} />
            </Button>
            <Button variant="contained" sx={styles.boxConfirm} onClick={handleConfirm}>
              <FormattedMessage {...messages.btnConfirm} />
            </Button>
          </Box>
          <Button sx={styles.btnClose} onClick={handleClose}>
            <CloseIcon />
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalConfirm;
