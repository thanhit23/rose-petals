import { styles } from '../common';

const paperFormStep = {
  overflow: 'hidden',
  borderRadius: '8px',
  marginBottom: '30px',
  padding: '2rem 1.5rem',
  color: 'rgb(43, 52, 69)',
  boxShadow: 'rgba(3, 0, 71, 0.09) 0px 1px 3px',
};

const boxFormStep = {
  display: 'flex',
  marginTop: '2rem',
  alignItems: 'center',
  marginBottom: '2rem',
};

const wrapperIcon = {
  width: '64px',
  height: '64px',
  overflow: 'hidden',
  userSelect: 'none',
  borderRadius: '50%',
  color: 'rgb(246, 249, 252)',
  backgroundColor: 'rgb(210, 63, 87)',
  '& > svg': {
    fontSize: '32px',
  },
};

const wrapperDoneIcon = {
  position: 'absolute',
  right: '0',
  top: '0',
};

const boxDoneIcon = {
  width: '22px',
  height: '22px',
  backgroundColor: '#F3F5F9',
  color: 'rgb(51, 208, 103)',
  '& > svg': {
    fontSize: '1rem',
  },
};

const bridge = {
  flex: '1 1 0',
  height: '4px',
  minWidth: '50px',
  backgroundColor: '#D23F57',
};

const paperList = {
  color: '#2B3445',
  boxShadow: '0px 1px 3px rgba(3, 0, 71, 0.09)',
  overflow: 'hidden',
  borderRadius: '8px',
  padding: '0px',
  marginBottom: '30px',
};

const paperHeader = {
  color: '#2B3445',
  cursor: 'pointer',
  padding: '12px',
  borderRadius: '0',
  boxShadow: 'none',
  backgroundColor: '#F3F5F9',
  display: 'flex',
  alignItems: 'center',
};

const boxTitleHeader = {
  display: 'flex',
  alignItems: 'center',
  margin: '6px',
  whiteSpace: 'pre',
  flex: '1 1 0',
};

const boxTitleItem = {
  fontFamily: styles.fontFamilyDefault,
  fontSize: '14px',
  color: '#7D879C',
  marginRight: '4px',
  letterSpacing: 'inherit',
};

const boxTitleItemContent = {
  fontFamily: styles.fontFamilyDefault,
  fontSize: '14px',
};

const typographyWriteReview = {
  fontFamily: styles.fontFamilyDefault,
  fontSize: '14px',
  letterSpacing: 'inherit',
};

const btnWriteReview = {
  minWidth: '0',
  minHeight: '0',
  fontWeight: '600',
  textTransform: 'capitalize',
  letterSpacing: 'inherit',
};

const boxWriteReview = {
  display: 'flex',
  flex: '160px',
  margin: '6px',
  alignItems: 'center',
};

const descriptionProduct = {
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

const priceProduct = {
  fontFamily: styles.fontFamilyDefault,
  fontSize: '14px',
  color: '#7D879C',
  letterSpacing: 'inherit',
};

const nameProduct = {
  marginBottom: '0px',
  marginTop: '0px',
  fontSize: '14px',
  fontWeight: '600',
  lineHeight: '1.5',
  textTransform: 'none',
  whiteSpace: 'normal',
};

const wrapperProduct = {
  display: 'flex',
  paddingLeft: '16px',
  paddingRight: '16px',
  paddingTop: '8px',
  paddingBottom: '8px',
  flexWrap: 'wrap',
  alignItems: 'center',
};

const containerProduct = {
  paddingTop: '8px',
  paddingBottom: '8px',
};

const boxAddress = {
  marginBottom: '0px',
  marginTop: '0px',
  fontSize: '14px',
  textTransform: 'none',
  whiteSpace: 'normal',
};

const boxTimeShipping = {
  display: 'flex',
  WebkitBoxPack: 'end',
  justifyContent: 'flex-end',
};

const TypographyTimeShipping = {
  fontSize: '14px',
  fontFamily: styles.fontFamilyDefault,
  padding: '0.5rem 1rem',
  textAlign: 'center',
  borderRadius: '300px',
  color: '#D23F57',
  backgroundColor: '#FCE9EC',
  letterSpacing: 'inherit',
};

export default {
  TypographyTimeShipping,
  typographyWriteReview,
  boxDescriptionProduct,
  boxTitleItemContent,
  descriptionProduct,
  containerProduct,
  boxTimeShipping,
  wrapperDoneIcon,
  boxImageProduct,
  btnWriteReview,
  boxTitleHeader,
  boxWriteReview,
  wrapperProduct,
  avatarProduct,
  paperFormStep,
  boxTitleItem,
  priceProduct,
  nameProduct,
  boxDoneIcon,
  wrapperIcon,
  boxFormStep,
  paperHeader,
  boxAddress,
  paperList,
  bridge,
};
