import { styles } from '../common';

const textField = {
  '& > label': {
    color: '#373F50',
  },
};

const divider = {
  margin: '0px -32px 24px',
  borderColor: 'rgb(243, 245, 249)',
};

const paperPayCreditCard = {
  boxShadow: '0px 1px 3px rgba(3, 0, 71, 0.09)',
  overflow: 'hidden',
  borderRadius: '8px',
  position: 'relative',
  padding: '1.5rem 1.75rem',
  marginBottom: '32px',
};

const formControlLabel = {
  marginLeft: '-11px',
  marginRight: '16px',
  marginBottom: '24px',
  '& > span': {
    marginBottom: 0,
    marginTop: 0,
    fontSize: '14px',
    fontWeight: 600,
    textTransform: 'none',
    whiteSpace: 'normal',
    letterSpacing: 'inherit',
    fontFamily: styles.fontFamilyDefault,
  },
};

const btnSubmit = {
  minWidth: '0',
  minHeight: '0',
  fontWeight: '600',
  textTransform: 'capitalize',
  marginBottom: '32px',
  letterSpacing: 'inherit',
  fontFamily: styles.fontFamilyDefault,
};

const boxTextFieldPaypalEmail = {
  display: 'inline-flex',
  flexDirection: 'column',
  position: 'relative',
  minWidth: '0px',
  padding: '0px',
  margin: '0px 30px 0px 0px',
  border: '0px',
  verticalAlign: 'top',
  width: '100%',
};

const boxPayWithPaypal = {
  display: 'flex',
  alignItems: 'flex-end',
  marginBottom: '32px',
};

const btnBackCheckout = {
  width: '100%',
  minWidth: '0',
  minHeight: '0',
  fontWeight: '600',
  textTransform: 'capitalize',
  fontFamily: styles.fontFamilyDefault,
  letterSpacing: 'inherit',
};

const btnReview = {
  width: '100%',
  minWidth: '0',
  minHeight: '0',
  fontWeight: '600',
  textTransform: 'capitalize',
  fontFamily: styles.fontFamilyDefault,
  letterSpacing: 'inherit',
  boxShadow: '0px 0px 28px rgba(3, 0, 71, 0.01)',
  '&:hover': {
    backgroundColor: '#E3364E',
    boxShadow: '0px 0px 28px rgba(3, 0, 71, 0.01)',
  },
};

export default {
  boxTextFieldPaypalEmail,
  paperPayCreditCard,
  formControlLabel,
  boxPayWithPaypal,
  btnBackCheckout,
  btnReview,
  textField,
  btnSubmit,
  divider,
};
