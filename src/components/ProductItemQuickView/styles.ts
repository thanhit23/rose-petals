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
};

const boxComponentImg = {
  width: {
    xs: '100%',
    sm: '100%',
    md: '100%',
    lg: '100%',
  },
  height: '100%',
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

const boxCategory = {
  fontSize: ' 12px',
  lineHeight: 1.5,
  color: '#AEB4BE',
  textTransform: 'none',
  whiteSpace: 'normal',
};
const boxProductNameBox = {
  maxWidth: '220px',
  textTransform: 'none',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
};

const boxProductName = {
  textTransform: 'none',
  marginBottom: 0,
  marginTop: 0,
  fontSize: '14px',
  fontWeight: 700,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
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
  boxProductNameBox,
  boxProductName,
  boxWrapperItem,
  btnQuickView,
  boxCategory,
  boxPrice,
  rating,
  review,
};
