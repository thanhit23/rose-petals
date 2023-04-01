import { styles } from '../common';

const paperItemAddress = {
  color: 'rgb(43, 52, 69)',
  boxShadow: 'rgba(3, 0, 71, 0.09) 0px 1px 3px',
  overflow: 'hidden',
  display: 'flex',
  flexWrap: 'wrap',
  WebkitBoxAlign: 'center',
  alignItems: 'center',
  borderRadius: '10px',
  cursor: 'pointer',
  marginTop: '16px',
  marginBottom: '16px',
  padding: '6px 18px',
};

const address = {
  fontSize: '14px',
  fontFamily: styles.fontFamilyDefault,
  letterSpacing: 'inherit',
  whiteSpace: 'pre',
  margin: '6px',
  textAlign: 'left',
  flex: '1 1 0px',
};

const addressDetail = {
  fontSize: '14px',
  fontFamily: styles.fontFamilyDefault,
  letterSpacing: 'inherit',
  margin: '6px',
  textAlign: 'left',
  flex: '1 1 260px !important',
};

const phoneNumber = {
  fontSize: '14px',
  fontFamily: styles.fontFamilyDefault,
  letterSpacing: 'inherit',
  whiteSpace: 'pre',
  margin: '6px',
  textAlign: 'left',
  flex: '1 1 0px',
};

const actions = {
  margin: '0px',
  fontSize: '14px',
  fontFamily: styles.fontFamilyDefault,
  letterSpacing: 'inherit',
  whiteSpace: 'pre',
  textAlign: 'center',
  color: 'rgb(125, 135, 156)',
  flex: '1 1 0px',
};

const boxPagination = {
  display: 'flex',
  marginTop: '40px',
  justifyContent: 'center',
  '& > nav > ul > li > button': {
    fontFamily: styles.fontFamilyDefault,
  },
};

export default {
  paperItemAddress,
  boxPagination,
  addressDetail,
  phoneNumber,
  address,
  actions,
};
