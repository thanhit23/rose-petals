import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export default function SkeletonAnimation() {
  return (
    <Stack spacing={1}>
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rounded" width={500} height={60} />
      <Skeleton variant="rounded" width={500} height={60} />

      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rounded" width={500} height={60} />
      <Skeleton variant="rounded" width={500} height={60} />
    </Stack>
  );
}
