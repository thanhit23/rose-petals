import { styles } from '../common';

const paperBilling = {
  color: 'rgb(43, 52, 69)',
  boxShadow: 'rgba(3, 0, 71, 0.09) 0px 1px 3px',
  overflow: 'hidden',
  borderRadius: '8px',
  padding: '24px',
};

const boxWrapTotalPrice = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '16px',
};

const boxTotal = {
  lineHeight: '1.5',
  color: 'rgb(125, 135, 156)',
  textTransform: 'none',
  whiteSpace: 'normal',
};

const boxPrice = {
  lineHeight: '1',
  fontSize: '18px',
  fontWeight: '600',
  textTransform: 'none',
  whiteSpace: 'normal',
};

const divider = {
  margin: '0px 0px 16px',
  borderColor: 'rgb(243, 245, 249)',
};

const boxTitleComment = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '16px',
  columnGap: '8px',
};

const boxAdditionalComments = {
  lineHeight: '1.5',
  textTransform: 'none',
  whiteSpace: 'normal',
  fontWeight: 600,
};

const boxNote = {
  lineHeight: '1',
  padding: '6px 10px',
  fontSize: '12px',
  borderRadius: '3px',
  color: 'rgb(210, 63, 87)',
  backgroundColor: 'rgb(252, 233, 236)',
  textTransform: 'none',
  whiteSpace: 'normal',
};

const formControlComment = { marginBottom: '16px' };

const textFieldComment = {
  '& > div': {
    padding: '8.5px 14px',
    '& > textarea': {
      height: '120px !important',
    },
  },
};

const btnApplyVoucher = {
  width: '100%',
  minWidth: '0px',
  minHeight: '0px',
  fontWeight: '600',
  textTransform: 'capitalize',
  fontFamily: styles.fontFamilyDefault,
  marginTop: '16px',
  marginBottom: '32px',
  letterSpacing: 'inherit',
};

const boxShippingEstimates = {
  lineHeight: '1.5',
  fontWeight: '600',
  marginBottom: '16px',
  display: 'block',
  textTransform: 'none',
  whiteSpace: 'normal',
};

const textFieldState = {
  '& > div > div': {
    padding: '7.07px 14px',
    fontSize: '14px',
    fontFamily: styles.fontFamilyDefault,

    letterSpacing: 'initial',
  },
};

const textFieldZipCode = {
  marginTop: '16px',
};

const btnCalculateShipping = {
  minWidth: '0',
  minHeight: '0',
  fontWeight: '600',
  textTransform: 'capitalize',
  marginTop: '16px',
  marginBottom: '16px',
  letterSpacing: 'inherit',
  fontFamily: styles.fontFamilyDefault,
};

const btnCheckoutNow = {
  minWidth: '0',
  minHeight: '0',
  fontWeight: '600',
  textTransform: 'capitalize',
  letterSpacing: 'inherit',
  fontFamily: styles.fontFamilyDefault,
};

export default {
  boxAdditionalComments,
  boxShippingEstimates,
  btnCalculateShipping,
  formControlComment,
  boxWrapTotalPrice,
  textFieldComment,
  textFieldZipCode,
  btnApplyVoucher,
  boxTitleComment,
  textFieldState,
  btnCheckoutNow,
  paperBilling,
  boxTotal,
  boxPrice,
  divider,
  boxNote,
};
