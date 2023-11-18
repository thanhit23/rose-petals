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

const btnCheckoutNow = {
  minWidth: '0',
  minHeight: '0',
  fontWeight: '600',
  textTransform: 'capitalize',
  letterSpacing: 'inherit',
  fontFamily: styles.fontFamilyDefault,
};

export default {
  boxWrapTotalPrice,
  btnCheckoutNow,
  paperBilling,
  boxTotal,
  boxPrice,
  divider,
};
