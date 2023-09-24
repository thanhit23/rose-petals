import { FormattedMessage } from 'react-intl';

import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';

import messages from './messages';
import styles from './styles';
import { ModalDeleteTypes } from './types';

export default function ShowModalDeleteMyAddress({ openModal, handleCloseModal, selectDataDelete }: ModalDeleteTypes) {
  const handleClose = () => handleCloseModal();
  const handleDelete = () => {
    console.log('deleted:', selectDataDelete);
    handleCloseModal();
  };
  return (
    <div>
      <Modal open={openModal} onClose={handleClose}>
        <Box sx={styles.modalDelete}>
          <Typography variant="h6" component="h2">
            <FormattedMessage {...messages.titleModalDelete} />
          </Typography>
          <Typography sx={{ mt: 2 }}>{selectDataDelete.address}</Typography>
          <Box sx={styles.boxControl}>
            <Button variant="contained" sx={styles.boxDelete} onClick={handleDelete}>
              <FormattedMessage {...messages.btnDelete} />
            </Button>
            <Button sx={styles.boxCancel} onClick={handleClose}>
              <FormattedMessage {...messages.btnCancel} />
            </Button>
          </Box>
          <Button sx={styles.btnClose} onClick={handleClose}>
            <CloseIcon />
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
