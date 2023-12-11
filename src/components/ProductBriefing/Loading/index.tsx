import { Box, Skeleton } from '@mui/material';

import styles from './styles';

const Loading = () => (
  <Box sx={styles.wrapperSkeleton}>
    <Box sx={styles.wrapperSkeletonTop}>
      <Box sx={styles.wrapperSkeletonLeft}>
        <Skeleton animation="wave" variant="rounded" height="100%" />
      </Box>
      <Box sx={styles.wrapperSkeletonRight}>
        <Box sx={styles.boxSkeletonTitle}>
          <Skeleton animation="wave" variant="rounded" />
          <Skeleton animation="wave" variant="rounded" width="60%" />
        </Box>

        <Box sx={styles.boxSkeletonTitle}>
          <Skeleton animation="wave" width="30%" />
          <Skeleton animation="wave" width="40%" />
          <Skeleton animation="wave" width="20%" />
        </Box>

        <Box sx={styles.boxSkeletonSelectSize}>
          <Skeleton animation="wave" variant="rounded" width={36} height={36} />
          <Skeleton animation="wave" variant="rounded" width={36} height={36} />
          <Skeleton animation="wave" variant="rounded" width={36} height={36} />
        </Box>

        <Skeleton animation="wave" variant="rounded" width="40%" />
        <Skeleton animation="wave" variant="rounded" width={140} height={40} />
      </Box>
    </Box>
    <Box sx={styles.wrapperSkeletonBottom}>
      <Skeleton animation="wave" variant="rounded" width={64} height={64} />
      <Skeleton animation="wave" variant="rounded" width={64} height={64} />
    </Box>
  </Box>
);
export default Loading;
