import Box from '@mui/material/Box';
import { Pagination as MuiPagination } from '@mui/material';

import styles from './styles';
import * as React from 'react';

function Pagination({ count, onChange }: { count: number; onChange: (page: number) => void }) {
  const handleChange = (e: React.ChangeEvent<unknown>, value: number) => {
    onChange(value);
  };

  return (
    <Box sx={styles.boxPagination}>
      <MuiPagination count={count} variant="outlined" color="primary" onChange={handleChange} />
    </Box>
  );
}

export default Pagination;
