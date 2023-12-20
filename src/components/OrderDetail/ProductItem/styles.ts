import { styles } from 'src/components/common';

const wrapperProduct = {
  display: 'flex',
  paddingLeft: '16px',
  paddingRight: '16px',
  paddingTop: '8px',
  paddingBottom: '8px',
  flexWrap: 'wrap',
  alignItems: 'center',
};

const boxImageProduct = {
  display: 'flex',
  flex: '2 2 260px',
  margin: '6px',
  alignItems: 'center',
};

const avatarProduct = {
  height: '64px',
  width: '64px',
};

const nameProduct = {
  marginBottom: '0px',
  marginTop: '0px',
  fontSize: '14px',
  fontWeight: '600',
  lineHeight: '1.5',
  textTransform: 'none',
  whiteSpace: 'normal',
  overflow: 'hidden',
  display: '-webkit-box',
  webkitBoxOrient: 'vertical',
  webkitLineClamp: 2,
};

const priceProduct = {
  fontFamily: styles.fontFamilyDefault,
  fontSize: '14px',
  color: '#7D879C',
  letterSpacing: 'inherit',
};

const boxDescriptionProduct = {
  display: 'flex',
  flex: '1 1 260px',
  margin: '6px',
  alignItems: 'center',
};

const descriptionProduct = {
  fontFamily: styles.fontFamilyDefault,
  fontSize: '14px',
  color: '#7D879C',
  letterSpacing: 'inherit',
};

const boxWriteReview = {
  display: 'flex',
  flex: '160px',
  margin: '6px',
  alignItems: 'center',
};

const btnWriteReview = {
  minWidth: '0',
  minHeight: '0',
  fontWeight: '600',
  textTransform: 'capitalize',
  letterSpacing: 'inherit',
};

const typographyWriteReview = {
  fontFamily: styles.fontFamilyDefault,
  fontSize: '14px',
  letterSpacing: 'inherit',
};

export default {
  wrapperProduct,
  boxImageProduct,
  avatarProduct,
  nameProduct,
  priceProduct,
  boxDescriptionProduct,
  descriptionProduct,
  boxWriteReview,
  btnWriteReview,
  typographyWriteReview,
};
