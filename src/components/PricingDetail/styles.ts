import { styles } from '../common';

const paper = {
  color: 'rgb(43, 52, 69)',
  boxShadow: 'rgba(3, 0, 71, 0.09) 0px 1px 3px',
  overflow: 'hidden',
  borderRadius: '8px',
  position: 'relative',
  padding: '1.5rem 1.75rem',
};

const boxCalculate = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '8px',
};

const typographyTitle = {
  fontSize: '14px',
  fontFamily: styles.fontFamilyDefault,
  color: '#7d879c',
  letterSpacing: 'inherit',
};

const typographyPrice = {
  fontFamily: styles.fontFamilyDefault,
  fontSize: '18px',
  fontWeight: '600',
  lineHeight: '1',
  letterSpacing: 'inherit',
};

const typographyTotalPrice = {
  letterSpacing: 'inherit',
  fontFamily: styles.fontFamilyDefault,
  margin: '0px 0px 24px',
  fontSize: '25px',
  fontWeight: '600',
  lineHeight: '1',
  textAlign: 'right',
};

const divider = {
  margin: '0px 0px 1rem',
  borderColor: 'rgb(243, 245, 249)',
};

const outlinedInput = {
  '& > div > input': {
    fontSize: '14px',
  },
};

const btnApplyVoucher = {
  margin: '1rem 0px 30px',
  width: '100%',
  minWidth: '0px',
  minHeight: '0px',
  fontWeight: '600',
  textTransform: 'capitalize',
  fontFamily: styles.fontFamilyDefault,
  letterSpacing: 'inherit',
};

export default {
  typographyTotalPrice,
  btnApplyVoucher,
  typographyTitle,
  typographyPrice,
  outlinedInput,
  boxCalculate,
  divider,
  paper,
};
