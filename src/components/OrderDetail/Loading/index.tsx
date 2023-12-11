import React from 'react';

import { Box, Skeleton } from '@mui/material';

import styles from './styles';

const Loading = () => (
  <Box sx={styles.wrapperSkeleton}>
    <Box sx={styles.wrapperSkeletonTop}>
      <Box sx={styles.wrapperSkeletonTopBox}>
        <Skeleton sx={styles.wrapperSkeletonTopBorder} animation="wave" variant="circular" height={64} width={64} />
        <Skeleton animation="wave" variant="rectangular" height="4px" width="100%" />
        <Skeleton sx={styles.wrapperSkeletonTopBorder} animation="wave" variant="circular" height={64} width={64} />
        <Skeleton animation="wave" variant="rectangular" height="4px" width="100%" />
        <Skeleton sx={styles.wrapperSkeletonTopBorder} animation="wave" variant="circular" height={64} width={64} />
      </Box>
      <Skeleton sx={styles.wrapperSkeletonTopDate} animation="wave" variant="rounded" height={36} width={220} />
    </Box>
    <Box sx={styles.wrapperSkeletonBetween}>
      <React.Fragment>
        {Array(4)
          .fill(null)
          .map((_, key) => (
            <Box key={key} sx={styles.skeletonProduct}>
              <Skeleton animation="wave" variant="rounded" height="60px" width="100%" />
            </Box>
          ))}
      </React.Fragment>
    </Box>
    <Box sx={styles.wrapperSkeletonBottom}>
      <Box sx={styles.skeletonAddress}>
        <Skeleton animation="wave" variant="rounded" height="100%" width="100%" />
      </Box>
      <Box sx={styles.skeletonSummary}>
        <Skeleton animation="wave" variant="rounded" height="100%" width="100%" />
      </Box>
    </Box>
  </Box>
);

export default Loading;
