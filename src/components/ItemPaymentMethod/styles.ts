import { styles } from '../common';

const paperItem = {
  display: 'flex',
  borderRadius: '10px',
  cursor: 'pointer',
  marginTop: '1rem',
  marginBottom: '1rem',
  padding: '6px 18px',
  flexWrap: 'nowrap',
  alignItems: 'center',
  color: '#2B3445',
  overflow: 'hidden',
  boxShadow: '0px 1px 3px rgba(3, 0, 71, 0.09)',
};

const imgPayment = {
  backgroundColor: 'rgb(255, 255, 255)',
  color: 'rgb(43, 52, 69)',
  transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  boxShadow: 'rgba(3, 0, 71, 0.09) 0px 1px 3px',
  overflow: 'hidden',
  width: '52px',
  height: '38px',
  marginRight: '10px',
  borderRadius: '2px',
};

const codeItemTitle = {
  display: 'flex',
  alignItems: 'center',
  fontSize: '16px',
  fontWeight: '600',
  lineHeight: '1.5',
  margin: '6px',
  textAlign: 'left',
  textTransform: 'none',
  whiteSpace: 'normal',
  flex: '1 1 0',
  '& > h5': {
    fontSize: '16px',
    fontWeight: '600',
    lineHeight: '1.5',
    margin: '6px',
    textTransform: 'none',
    whiteSpace: 'normal',
  },
};

const codeItem = {
  fontSize: '16px',
  fontWeight: '600',
  lineHeight: '1.5',
  margin: '6px',
  textAlign: 'left',
  textTransform: 'none',
  whiteSpace: 'normal',
  flex: '1 1 0',
};

const orderItem = {
  fontSize: '14px',
  fontFamily: styles.fontFamilyDefault,
  margin: '6px',
  textAlign: 'left',
  letterSpacing: 'inherit',
  flex: '1 1 0',
};

const paymentImage = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  border: '1px solid red',
  borderRadius: '4px',
  padding: '4px',
};

export default {
  codeItemTitle,
  paymentImage,
  imgPayment,
  orderItem,
  paperItem,
  codeItem,
};
