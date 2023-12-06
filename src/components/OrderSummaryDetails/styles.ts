import { styles } from '../common';

const paperAddress = {
  color: '#2B3445',
  boxShadow: '0px 1px 3px rgba(3, 0, 71, 0.09)',
  overflow: 'hidden',
  borderRadius: '8px',
  padding: '20px 30px',
};

const boxAddressTitle = {
  marginBottom: '16px',
  marginTop: '0px',
  fontSize: '14px',
  textTransform: 'none',
  whiteSpace: 'normal',
};

const boxAddress = {
  marginBottom: '0px',
  marginTop: '0px',
  fontSize: '14px',
  textTransform: 'none',
  whiteSpace: 'normal',
};

const paperSummary = {
  color: '#2B3445',
  boxShadow: '0px 1px 3px rgba(3, 0, 71, 0.09)',
  overflow: 'hidden',
  borderRadius: '8px',
  padding: '20px 30px',
};

const boxTotalSummary = {
  marginBottom: '16px',
  marginTop: '0px',
  fontSize: '16px',
  fontWeight: '600',
  lineHeight: '1.5',
  textTransform: 'none',
  whiteSpace: 'normal',
};

const boxTitle = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '8px',
  justifyContent: 'space-between',
};

const titleSummary = {
  fontFamily: styles.fontFamilyDefault,
  letterSpacing: 'inherit',
  fontSize: '14px',
  color: '#7D879C',
};

const priceSummary = {
  marginBottom: '0px',
  marginTop: '0px',
  fontSize: '14px',
  fontWeight: '600',
  lineHeight: '1.5',
  textTransform: 'none',
  whiteSpace: 'normal',
};

const paymentMethod = {
  display: 'flex',
  flexDirection: 'column',
  fontFamily: styles.fontFamilyDefault,
  fontSize: '14px',
  letterSpacing: 'inherit',
  margin: '1em 0',
  lineHeight: 1.75,
};

const divider = {
  borderColor: '#F3F5F9',
  marginBottom: '8px',
};

const boxImgPaidCard = {
  border: '1px solid #D23F57',
  borderRadius: '6px',
  marginTop: '8px',
  objectFit: 'cover',
  width: '40px',
  height: '40px',
};

const btnCancelOrder = {
  fontFamily: styles.fontFamilyDefault,
  width: '100%',
  minWidth: '0px',
  minHeight: '0px',
  fontWeight: '600',
  textTransform: 'capitalize',
  boxShadow: '0px 0px 28px rgba(3, 0, 71, 0.01)',
  letterSpacing: 'inherit',
  '&:hover': {
    backgroundColor: '#E3364E',
    boxShadow: '0px 0px 28px rgba(3, 0, 71, 0.01)',
  },
};

export default {
  boxTotalSummary,
  btnCancelOrder,
  boxAddressTitle,
  boxImgPaidCard,
  titleSummary,
  priceSummary,
  paperSummary,
  paperAddress,
  boxAddress,
  boxTitle,
  paymentMethod,
  divider,
};
