import { styles } from '../common';

const containerTitle = {
  display: 'flex',
  marginTop: '-16px',
  marginBottom: '24px',
};

const wrapperTitle = {
  marginTop: '16px',
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

const paperHeaderList = {
  borderRadius: '10px',
  cursor: 'pointer',
  padding: '0px 18px',
  background: 'none',
  display: 'flex',
  flexWrap: 'nowrap',
};

const headerItem = {
  marginBottom: '0px',
  marginTop: '0px',
  fontSize: '16px',
  fontWeight: '600',
  lineHeight: '1.5',
  color: '#7D879C',
  marginLeft: '6px',
  marginRight: '6px',
  textAlign: 'left',
  textTransform: 'none',
  whiteSpace: 'normal',
  flex: '1 1 0',
};

const headerItemLast = {
  flex: '0 0 0!important',
  paddingLeft: '22px',
  paddingRight: '22px',
  margin: 0,
};

export default {
  paperHeaderList,
  headerItemLast,
  containerTitle,
  wrapperTitle,
  headerItem,
  boxTitle,
  title,
};
