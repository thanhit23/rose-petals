import * as React from 'react';

import { Pagination as MuiPagination } from '@mui/material';
import Box from '@mui/material/Box';

import styles from './styles';

function Pagination({ count, page, onChange }: { count: number; page?: number; onChange: (page: number) => void }) {
  const handleChange = (e: React.ChangeEvent<unknown>, value: number) => {
    onChange(value);
  };
  return (
    <Box sx={styles.boxPagination}>
      <MuiPagination count={count} page={page} variant="outlined" color="primary" onChange={handleChange} />
    </Box>
  );
}

export default Pagination;
