import React, { useRef, useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import Login from '../../../containers/Login';
import styles from './styles';

export default function BasicModal() {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState<DialogProps['scroll']>('paper');

  const handleClickOpen = (scrollType: DialogProps['scroll']) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const descriptionElementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleClickOpen('body')} sx={styles.buttonPerson}>
        <PersonOutlineOutlinedIcon />
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        sx={styles.dialog}
      >
        <Paper elevation={3} sx={styles.paperLogin}>
          <Login />
        </Paper>
      </Dialog>
    </div>
  );
}
