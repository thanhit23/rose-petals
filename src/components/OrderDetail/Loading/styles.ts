const wrapperSkeleton = {
  marginTop: '14px',
  page: '10px',
};

const wrapperSkeletonTop = {
  position: 'relative',
  marginBottom: '30px',
  background: 'gold',
  borderRadius: '8px',
  backgroundColor: 'rgba(33, 43, 54, 0.11)',
  boxShadow: '0px 1px 3px #bbbbbb',
};

const wrapperSkeletonTopBox = {
  padding: '70px 30px 96px',
  display: 'flex',
  alignItems: 'center',
};

const wrapperSkeletonTopBorder = {
  backgroundColor: 'white',
  flexShrink: 0,
};

const wrapperSkeletonTopDate = {
  position: 'absolute',
  right: '30px',
  bottom: '25px',
  backgroundColor: 'white',
};

const wrapperSkeletonBetween = {
  gap: '16px',
  display: 'flex',
  flexDirection: 'column',
};

const wrapperSkeletonBottom = {
  marginTop: '30px',
  display: 'flex',
  gap: '24px',
};

const skeletonProduct = {
  boxShadow: '0px 1px 3px #bbbbbb',
  borderRadius: '8px',
  overflow: 'hidden',
};

const skeletonAddress = {
  flex: 1,
  boxShadow: '0px 1px 3px #bbbbbb',
  borderRadius: '8px',
  overflow: 'hidden',
  height: '80px',
};

const skeletonSummary = {
  flex: 1,
  boxShadow: '0px 1px 3px #bbbbbb',
  borderRadius: '8px',
  overflow: 'hidden',
  height: '220px',
};

export default {
  wrapperSkeleton,
  skeletonAddress,
  skeletonProduct,
  skeletonSummary,
  wrapperSkeletonTop,
  wrapperSkeletonTopBox,
  wrapperSkeletonTopBorder,
  wrapperSkeletonTopDate,
  wrapperSkeletonBetween,
  wrapperSkeletonBottom,
};
