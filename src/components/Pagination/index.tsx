import * as React from 'react';

import { Pagination as MuiPagination } from '@mui/material';
import Box from '@mui/material/Box';

import styles from './styles';

interface PaginationProps {
  count: number;
  onChange: (page: number) => void;
}

function Pagination({ count, onChange }: PaginationProps) {
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    onChange(value);
  };

  return (
    <Box sx={styles.boxPagination}>
      <MuiPagination count={count} variant="outlined" color="primary" onChange={handleChange} />
    </Box>
  );
}

export default Pagination;
