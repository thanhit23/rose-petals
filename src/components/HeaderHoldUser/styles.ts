import { styles } from '../common';

const containerTitle = {
  marginTop: '-16px',
  marginBottom: '24px',
};

const wrapperTitle = {
  marginTop: '16px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const boxTitle = {
  display: 'flex',
  alignItems: 'center',
  '& > svg': {
    color: '#D23F57',
  },
};

const title = {
  marginBottom: '0px',
  marginTop: '0px',
  fontSize: '25px',
  fontWeight: '700',
  lineHeight: '1',
  marginLeft: '12px',
  whiteSpace: 'normal',
  textTransform: 'none',
};

const btnOrderAgain = {
  fontWeight: 600,
  color: '#d23f57',
  padding: '6px 32px',
  boxShadow: 'inherit',
  letterSpacing: 'inherit',
  backgroundColor: '#fce9ec',
  textTransform: 'capitalize',
  fontFamily: styles.fontFamilyDefault,
  '&:hover': {
    backgroundColor: '#d23f570a',
    boxShadow: 'inherit',
  },
};

export default {
  containerTitle,
  btnOrderAgain,
  wrapperTitle,
  boxTitle,
  title,
};
