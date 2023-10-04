import { styles } from '../common';

const active = {
  backgroundColor: '#d23f57',
  color: '#fff',
};

const unActive = {
  color: '#d23f57',
  backgroundColor: '#fce9ec',
};

const chipItem = {
  padding: '0.5rem 1rem',
  fontSize: '14px',
  fontWeight: 600,
  cursor: 'pointer',
  margin: '4px 0px',
  fontFamily: styles.fontFamilyDefault,
  '&:hover': {
    backgroundColor: '#d23f57',
    color: '#fff',
  },
};

const bridge = {
  width: '50px',
  height: '4px',
  backgroundColor: 'rgb(252, 233, 236)',
  transition: 'all 350ms',
};

const boxBreadBar = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
  marginTop: '-4px',
};

export default {
  boxBreadBar,
  chipItem,
  unActive,
  active,
  bridge,
};
