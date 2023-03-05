import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import Badge from '@mui/material/Badge';
import Paper from '@mui/material/Paper';

export default function CartButton() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Badge badgeContent={4} color="secondary">
        <Button
          onClick={handleOpen}
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
          <LocalMallIcon color="action" />
        </Button>
      </Badge>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Paper
          elevation={0}
          sx={{
            position: 'absolute' as const,
            top: 0,
            right: 0,
            bottom: 0,
            maxWidth: 380,
            backgroundColor: '#fff',
            boxShadow: 24,
          }}
        >
          <Box
            sx={{
              width: '100%',
              maxWidth: '380px',
            }}
          >
            <Box
              sx={{
                overflow: 'auto',
                height: 'calc((100vh - 80px) - 3.25rem)',
              }}
            >
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Text in a modal
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
            </Box>
            <Box
              sx={{
                padding: '20px',
              }}
            >
              <Button
                href="/login"
                variant="contained"
                sx={{
                  fontSize: '0.875rem',
                  color: 'rgb(255, 255, 255)',
                  backgroundColor: 'rgb(210, 63, 87)',
                  width: '100%',
                  minWidth: '0px',
                  minHeight: '0px',
                  textTransform: 'capitalize',
                  height: '40px',
                  margin: '0px 0px 0.75rem',
                  boxShadow: 'rgb(43 52 69 / 10%) 0px 4px 16px',
                  '&:hover': {
                    backgroundColor: 'rgb(227, 54, 78)',
                    boxShadow: 'rgb(3 0 71 / 1%) 0px 0px 28px',
                  },
                }}
              >
                Checkout Now
              </Button>
              <Button
                href="/login"
                variant="outlined"
                sx={{
                  fontSize: '0.875rem',
                  border: '1px solid rgba(210, 63, 87, 0.5)',
                  color: 'rgb(210, 63, 87)',
                  width: '100%',
                  minWidth: '0px',
                  minHeight: '0px',
                  textTransform: 'capitalize',
                  height: '40px',
                  '&:hover': {
                    borderColor: 'rgb(210, 63, 87)',
                    backgroundColor: 'rgba(210, 63, 87, 0.04)',
                  },
                }}
              >
                Outlined
              </Button>
            </Box>
          </Box>
        </Paper>
      </Modal>
    </div>
  );
}
