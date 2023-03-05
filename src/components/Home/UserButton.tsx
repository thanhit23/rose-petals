import * as React from 'react';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import PersonIcon from '@mui/icons-material/Person';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import Login from '../../containers/Login';

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState<DialogProps['scroll']>('paper');

  const handleClickOpen = (scrollType: DialogProps['scroll']) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const descriptionElementRef = React.useRef<HTMLElement>(null);
  React.useEffect(() => {
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
      <Button
        onClick={handleClickOpen('body')}
        sx={{
          borderRadius: '50%',
          minWidth: 'auto',
          color: '#0000008a',
          padding: '10px',
          backgroundColor: '#F3F5F9',
          '&:hover': {
            backgroundColor: '#0000000a',
          },
        }}
      >
        <PersonIcon />
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <Paper
          elevation={3}
          sx={{
            overflow: 'hidden',
            borderRadius: '8px',
            width: '500px',
            padding: '2rem 3rem',
          }}
        >
          <Login />
        </Paper>
      </Dialog>
    </div>
  );
}
