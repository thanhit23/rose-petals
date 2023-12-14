import React from 'react';

import { Box, Skeleton } from '@mui/material';

import styles from './styles';

const Loading = () => (
  <React.Fragment>
    {Array(6)
      .fill(null)
      .map((_, key) => (
        <Box key={key} sx={styles.wrapperSkeleton}>
          <Skeleton sx={styles.skeletonItem} animation="wave" variant="rounded" height="46px" width="100%" />
        </Box>
      ))}
  </React.Fragment>
);

export default Loading;
