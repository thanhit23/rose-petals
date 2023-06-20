import * as React from 'react';
import { Link } from 'react-router-dom';

import EastIcon from '@mui/icons-material/East';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import Pagination from '../Pagination';
import styles from './styles';

function SupportTicketItem() {
  const handleChangePage = (value: number) => {
    console.log(value);
  };

  return (
    <>
      <Paper component={Link} to="/support-ticket/asdasdas" sx={styles.paperLink}>
        <Box flex="1 1 0">
          <span>Product Broken. I need refund</span>
          <Box sx={styles.boxContent}>
            <Chip label="Urgent" size="small" sx={styles.chipUrgent} />
            <Chip label="Open" size="small" sx={styles.chipOpen} />
            <Box component="span" sx={styles.boxDateBug}>
              Apr 13, 2022
            </Box>
            <Box component="span" sx={styles.boxContentBug}>
              Website Problem
            </Box>
          </Box>
        </Box>
        <Typography>
          <IconButton>
            <EastIcon fontSize="small" />
          </IconButton>
        </Typography>
      </Paper>
      <Pagination count={5} onChange={handleChangePage} />
    </>
  );
}

export default SupportTicketItem;
