const boxWrapperProduct = {
  maxHeight: '300px',
  cursor: 'pointer',
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: '#E3E9EF',
  '&:hover > .product-view-action': {
    opacity: 1,
  },
  '&:hover > .product-actions': {
    right: '10px',
  },
  '&:hover > a > div > div > .img-product': {
    transform: 'scale(1.12)',
  },
};

const boxWrapperItem = {
  position: 'relative',
  cursor: 'pointer',
  overflow: 'hidden',
  borderRadius: '4px',
  height: '290px',
};

const boxComponentImg = {
  width: '290px',
  height: '290px',
  transition: 'all 0.3s',
  objectFit: 'cover',
};

const btnQuickView = {
  fontSize: '0.9375rem',
  lineHeight: 1.75,
  minWidth: 0,
  minHeight: 0,
  fontWeight: 600,
  textTransform: 'capitalize',
  color: '#fff',
  backgroundColor: '#222',
  boxShadow: '0px 4px 16px rgb(43 52 69 / 10%)',
  width: '100%',
  padding: '0.6rem 2.5rem',
  left: 0,
  bottom: 0,
  opacity: 0,
  borderRadius: 0,
  position: 'absolute',
  transition: 'all 0.3s',
};

const btnAddCart = {
  top: '10px',
  right: '-40px',
  position: 'absolute',
  transition: 'right 0.3s .1s',
  padding: '8px',
  borderRadius: '50%',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
  },
};

const btnFavorite = {
  top: '45px',
  right: '-40px',
  position: 'absolute',
  transition: 'right 0.3s .2s',
  padding: '8px',
  borderRadius: '50%',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
  },
};

const icon = {
  fontSize: '1.25rem',
  color: 'rgba(0, 0, 0, 0.26)',
};

const iconFavorite = {
  fontSize: '1.25rem',
  color: '#d23f57',
};

const boxCategory = {
  fontSize: ' 12px',
  lineHeight: 1.5,
  color: '#AEB4BE',
  textTransform: 'none',
  whiteSpace: 'normal',
};

const boxProductName = {
  textTransform: 'none',
  whiteSpace: 'normal',
  marginBottom: 0,
  marginTop: 0,
  fontSize: '14px',
  fontWeight: 700,
};

const boxPrice = {
  lineHeight: 1.5,
  textTransform: 'none',
  whiteSpace: 'normal',
  marginBottom: 0,
  marginTop: 0,
  fontSize: '17px',
  fontWeight: 700,
  paddingTop: '4px',
  paddingBottom: '4px',
};

const boxWrapperRatingReview = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '8px',
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
  boxWrapperRatingReview,
  boxWrapperProduct,
  boxComponentImg,
  boxProductName,
  boxWrapperItem,
  btnQuickView,
  iconFavorite,
  boxCategory,
  btnFavorite,
  btnAddCart,
  boxPrice,
  rating,
  review,
  icon,
};
