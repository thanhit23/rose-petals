import { styles } from '../common';

const boxImgItem = {
  display: 'flex',
  WebkitBoxPack: 'center',
  justifyContent: 'center',
  WebkitBoxAlign: 'center',
  alignItems: 'center',
  width: '64px',
  height: '64px',
  minWidth: '64px',
  backgroundColor: 'white',
  border: '1px solid rgb(210, 63, 87)',
  borderRadius: '10px',
  marginLeft: 0,
  marginRight: '10px',
};

const boxContainerImg = {
  display: 'flex',
  WebkitBoxPack: 'center',
  justifyContent: 'center',
  marginBottom: '48px',
};

const boxWrapperImg = {
  boxSizing: 'border-box',
  display: 'inline-block',
  overflow: 'hidden',
  width: 'initial',
  height: 'initial',
  background: 'none',
  opacity: '1',
  border: '0px',
  margin: '0px',
  padding: '0px',
  position: 'relative',
  maxWidth: '100%',
};

const boxImg = {
  position: 'absolute',
  inset: '0px',
  boxSizing: 'border-box',
  padding: '0px',
  border: 'none',
  margin: 'auto',
  display: 'block',
  width: '0px',
  height: '0px',
  minWidth: '100%',
  maxWidth: '100%',
  minHeight: '100%',
  maxHeight: '100%',
  objectFit: 'contain',
};

const boxTitle = {
  marginBottom: '8px',
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

const boxWrapBrand = {
  display: 'flex',
  WebkitBoxAlign: 'center',
  alignItems: 'center',
};

const boxBrand = {
  marginBottom: '0px',
  marginTop: '0px',
  fontSize: '14px',
  fontWeight: '600',
  lineHeight: '1.5',
  textTransform: 'none',
  whiteSpace: 'normal',
};

const boxRated = {
  display: 'flex',
  WebkitBoxAlign: 'center',
  alignItems: 'center',
  gap: '0 8px',
  margin: '6px 0 20px',
};

const wrapRating = {
  lineHeight: '1',
  display: 'flex',
  alignItems: 'center',
  gap: '0 3px',
};

const wrapBrandRating = {
  display: 'flex',
  gap: '10px',
  marginBottom: { md: '8px' },
};

const rating = { fontSize: '1.2rem' };

const quantityRating = {
  marginBottom: '0px',
  marginTop: '0px',
  fontSize: '16px',
  fontWeight: '600',
  lineHeight: '1.5',
  textTransform: 'none',
  whiteSpace: 'normal',
  borderBottom: '1px solid #fab500',
  color: '#fab500',
};

const option = {
  marginBottom: '8px',
  marginTop: '0px',
  fontSize: '14px',
  fontWeight: '600',
  lineHeight: '1.5',
  textTransform: 'none',
  whiteSpace: 'normal',
};

const optionItem = {
  borderRadius: '4px',
  margin: '0px 8px 0px 0px',
  '& > span': {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    paddingLeft: '12px',
    paddingRight: '12px',
    whiteSpace: 'nowrap',
  },
};

const boxType = {
  marginTop: '0px',
  fontSize: '14px',
  fontWeight: '600',
  lineHeight: '1.5',
  textTransform: 'none',
  whiteSpace: 'normal',
};

const typeItem = {
  borderRadius: '4px',
  margin: '0px 8px 0px 0px',
  '& > span': {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    paddingLeft: '12px',
    paddingRight: '12px',
    whiteSpace: 'nowrap',
  },
};

const wrapPrice = {
  marginBottom: '16px',
};

const boxPrice = {
  marginBottom: '4px',
  marginTop: '0px',
  fontSize: '25px',
  fontWeight: '700',
  lineHeight: '1',
  color: 'rgb(210, 63, 87)',
  textTransform: 'none',
  whiteSpace: 'normal',
};

const btnAddCart = {
  backgroundColor: 'rgb(210, 63, 87)',
  boxShadow: 'rgb(43 52 69 / 10%) 0px 4px 16px',
  minWidth: '0px',
  minHeight: '0px',
  fontWeight: '600',
  textTransform: 'capitalize',
  height: '40px',
  fontSize: '0.875rem',
  lineHeight: '1.75',
  padding: '6px 1.75rem',
  borderRadius: '4px',
  fontFamily: styles.fontFamilyDefault,
  '&:hover': {
    textDecoration: 'none',
    backgroundColor: 'rgb(227, 54, 78)',
    boxShadow: 'rgb(3 0 71 / 1%) 0px 0px 28px',
  },
};

const boxItemInAddCart = {
  marginTop: '20px',
  display: 'flex',
  alignItems: 'end',
};

const boxRatings = {
  display: 'flex',
  alignItems: 'center',
  gap: '0 6px',
  borderLeft: '1px solid #999999',
  paddingLeft: '3px',
};

const boxQuantity = {
  margin: 0,
};

const boxSold = {
  display: 'flex',
  alignItems: 'center',
  gap: '0 6px',
  borderLeft: '1px solid #999999',
  paddingLeft: '3px',
};

const wrapQuantity = {
  display: 'flex',
  alignItems: 'center',
};

const boxShowError = {
  marginTop: '10px',
  color: '#ff424f',
  marginLeft: '100px',
  fontSize: '15px',
};

const boxChooseSize = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '20px',
};

const boxSizeQuantity = {
  padding: '20px',
  marginLeft: '-20px',
};

const boxShowErrorSoldOut = {
  marginTop: '10px',
  color: '#ff424f',
  fontSize: '15px',
};

const ratingAndSold = {
  borderBottom: '1px solid #333',
  fontWeight: 'bold',
  fontSize: '16px',
  paddingLeft: '3px',
};

const ratingAndSoldLabel = {
  color: '#666666',
};

const dialog = {
  '& div > div': {
    borderRadius: '8px',
    maxWidth: '500px',
  },
};

const paperLogin = {
  boxSizing: 'border-box',
  overflow: 'hidden',
  borderRadius: '8px',
  padding: '2rem 3rem',
};

export default {
  boxContainerImg,
  boxSold,
  paperLogin,
  dialog,
  ratingAndSoldLabel,
  ratingAndSold,
  boxRatings,
  quantityRating,
  boxWrapperImg,
  boxWrapBrand,
  boxImgItem,
  wrapRating,
  optionItem,
  boxShowError,
  boxSizeQuantity,
  boxShowErrorSoldOut,
  wrapQuantity,
  boxChooseSize,
  boxQuantity,
  wrapBrandRating,
  btnAddCart,
  boxItemInAddCart,
  wrapPrice,
  typeItem,
  boxTitle,
  boxBrand,
  boxRated,
  boxPrice,
  boxType,
  option,
  boxImg,
  rating,
};
