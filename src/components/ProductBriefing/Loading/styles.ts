const wrapperSkeleton = {
  display: 'flex',
  flexDirection: 'column',
  gap: '30px',

  '& span': { borderRadius: '10px' },
};

const wrapperSkeletonTop = {
  display: 'flex',
  gap: '40px',

  '& span': { borderRadius: '4px' },
};

const wrapperSkeletonBottom = {
  display: 'flex',
  justifyContent: 'center',
  gap: '10px',
  width: 'calc(50% - 10px)',
};

const wrapperSkeletonLeft = {
  flex: 1,
  height: '320px',
};

const wrapperSkeletonRight = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  flex: 1,
};

const boxSkeletonTitle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
};

const boxSkeletonSelectSize = {
  display: 'flex',
  gap: '10px',
};

export default {
  wrapperSkeleton,
  wrapperSkeletonTop,
  wrapperSkeletonBottom,
  wrapperSkeletonLeft,
  wrapperSkeletonRight,
  boxSkeletonTitle,
  boxSkeletonSelectSize,
};
