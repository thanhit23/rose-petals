import React from 'react';

import Box from '@mui/material/Box';

import styles from './styles';

function Loading() {
  return (
    <Box sx={styles.wrapLoading}>
      <div className="lds-ellipsis">
        <div />
        <div />
        <div />
        <div />
      </div>
    </Box>
  );
}

export default Loading;
