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

const gripItem = {
  '& > div > div': {
    overflow: 'hidden',
  },
  '&:hover > div > div > .btn-next-arrow': {
    right: '0 !important',
  },
  '&:hover > div > div > .btn-prev-arrow': {
    left: '0 !important',
  },
};

const nextArrow = {
  minWidth: 'inherit',
  borderRadius: '50%',
  color: '#d23f57',
  transition: 'all .3s',
  right: '-60px !important',
};

const prevArrow = {
  minWidth: 'inherit',
  borderRadius: '50%',
  color: '#d23f57',
  transition: 'all .3s',
  left: '-60px !important',
};

const boxImage = {
  height: '400px',
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '100%',
  objectFit: 'contain',
};

const boxNameProduct = {
  marginBottom: 0,
  marginTop: 0,
  fontSize: '25px',
  fontWeight: 700,
  lineHeight: 1.5,
  textTransform: 'none',
  whiteSpace: 'normal',
};

const boxCategory = {
  marginBottom: 0,
  marginTop: 0,
  fontSize: '13px',
  paddingTop: '8px',
  paddingBottom: '8px',
  color: 'rgb(174, 180, 190)',
  fontWeight: 600,
  textTransform: 'none',
  whiteSpace: 'normal',
};

const boxPrice = {
  marginBottom: 0,
  marginTop: 0,
  fontSize: '30px',
  fontWeight: 700,
  lineHeight: 1.5,
  color: 'rgb(210, 63, 87)',
  textTransform: 'none',
  whiteSpace: 'normal',
};

const boxDescription = {
  marginBottom: '16px',
  marginTop: '16px',
  fontSize: '14px',
  textTransform: 'none',
  whiteSpace: 'normal',
};

const boxRatingReview = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
};

const boxQuantity = {
  display: 'flex',
  alignItems: 'center',
};

const quantity = {
  margin: '0px 20px',
  fontSize: '20px',
  fontWeight: 600,
  lineHeight: 1.5,
  textTransform: 'none',
  whiteSpace: 'normal',
};

const boxIncreaseReduce = {
  fontSize: '0.8125rem',
  lineHeight: 1.75,
  borderRadius: '4px',
  border: '1px solid rgba(210, 63, 87, 0.5)',
  color: 'rgb(210, 63, 87)',
  minWidth: 0,
  minHeight: 0,
  fontWeight: 600,
  textTransform: 'capitalize',
  padding: '0.6rem',
  height: '45px',
};

const boxAddToCart = {
  fontSize: '0.8125rem',
  lineHeight: 1.75,
  borderRadius: '4px',
  color: 'rgb(255, 255, 255)',
  backgroundColor: 'rgb(210, 63, 87)',
  boxShadow: 'rgb(43 52 69 / 10%) 0px 4px 16px',
  minWidth: 0,
  minHeight: 0,
  fontWeight: 600,
  padding: '0.6rem 2.5rem',
  height: '45px',
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

const divider = {
  margin: '0px 0px 16px',
  borderColor: 'rgb(243, 245, 249)',
};

const rating = {
  fontSize: '16px',
};

const review = {
  fontSize: '12px',
  lineHeight: 1.5,
  fontWeight: 600,
  color: '#AEB4BE',
  textTransform: 'none',
  whiteSpace: 'normal',
};

export default {
  boxIncreaseReduce,
  boxWrapperModal,
  boxRatingReview,
  boxNameProduct,
  boxDescription,
  boxAddToCart,
  boxQuantity,
  boxCategory,
  nextArrow,
  prevArrow,
  gripItem,
  btnClose,
  boxImage,
  quantity,
  boxPrice,
  divider,
  rating,
  review,
};
