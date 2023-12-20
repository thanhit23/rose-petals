const boxWrapperModal = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'background.paper',
  flex: '1 1 auto',
  overflowY: 'auto',
  padding: '20px 24px',
  maxWidth: '900px',
  width: '100%',
  p: 4,
  borderRadius: '8px',
};

const btnClose = {
  position: 'absolute',
  fontSize: '1.5rem',
  padding: '8px',
  borderRadius: '50%',
  overflow: 'visible',
  color: 'rgba(0, 0, 0, 0.54)',
  transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  top: '3px',
  right: '3px',
  minWidth: 'inherit',
};

const boxTitle = {
  marginBottom: '14px',
  marginTop: '0px',
  fontSize: { sm: '25px', md: '20px' },
  fontWeight: '700',
  lineHeight: '1.5',
  textTransform: 'none',
  whiteSpace: 'normal',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  webkitBoxOrient: 'vertical',
  webkitLineClamp: 2,
};

const outlineInput = {
  font: 'inherit',
  letterSpacing: 'inherit',
  borderRadius: '10px',
  paddingRight: 0,
  '& > input': {
    fontSize: '14px',
    color: '#646363',
  },
};

const boxControlBtn = {
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '8px',
  marginTop: '10px',
};

const boxReviewBtn = {
  fontSize: '0.875rem',
  color: 'rgb(255, 255, 255)',
  maxWidth: '120px',
  backgroundColor: 'rgb(210, 63, 87)',
  width: '100%',
  minWidth: '0px',
  minHeight: '0px',
  textTransform: 'capitalize',
  height: '40px',
  margin: '0px 0px 0.75rem',
  boxShadow: 'rgb(43 52 69 / 10%) 0px 4px 16px',
  '&:hover': {
    backgroundColor: 'rgb(227, 54, 78)',
    boxShadow: 'rgb(3 0 71 / 1%) 0px 0px 28px',
  },
};

const boxCancelReview = {
  fontSize: '0.875rem',
  maxWidth: '120px',
  border: '1px solid rgba(210, 63, 87, 0.5)',
  color: 'rgb(210, 63, 87)',
  width: '100%',
  minWidth: '0px',
  minHeight: '0px',
  textTransform: 'capitalize',
  height: '40px',
  '&:hover': {
    borderColor: 'rgb(210, 63, 87)',
    backgroundColor: 'rgba(210, 63, 87, 0.04)',
  },
};

const wrapRating = {
  display: 'flex',
  marginBottom: '12px',
  gap: '4px',
};

const boxYourRating = {
  marginBottom: '0px',
  marginTop: '0px',
  fontSize: '16px',
  fontWeight: '600',
  lineHeight: '1.5',
  color: 'rgb(75, 86, 107)',
  textTransform: 'none',
  whiteSpace: 'normal',
};

const boxRequired = {
  marginBottom: '0px',
  marginTop: '0px',
  fontSize: '16px',
  fontWeight: '600',
  lineHeight: '1.5',
  color: 'rgb(233, 69, 96)',
  textTransform: 'none',
  whiteSpace: 'normal',
};

const boxYourReview = {
  marginBottom: '0px',
  marginTop: '0px',
  fontSize: '16px',
  fontWeight: '600',
  lineHeight: '1.5',
  color: 'rgb(75, 86, 107)',
  textTransform: 'none',
  whiteSpace: 'normal',
};

export default {
  boxCancelReview,
  boxReviewBtn,
  boxWrapperModal,
  outlineInput,
  boxControlBtn,
  btnClose,
  boxTitle,
  wrapRating,
  boxYourRating,
  boxRequired,
  boxYourReview,
};
