import { styles } from '../common';

const paperLink = {
  display: 'flex',
  flexWrap: 'wrap',
  cursor: 'pointer',
  marginTop: '1rem',
  borderRadius: '10px',
  marginBottom: '1rem',
  padding: '15px 24px',
  alignItems: 'center',
  boxShadow: '0px 1px 3px rgba(3, 0, 71, 0.09)',
};

const boxContent = {
  display: 'flex',
  margin: '-6px',
  flexWrap: 'wrap',
  paddingTop: '8px',
  alignItems: 'center',
};

const chipUrgent = {
  height: '26px',
  margin: '6px',
  color: '#D23F57',
  padding: '0 0.25rem',
  backgroundColor: '#FCE9EC',
  fontFamily: styles.fontFamilyDefault,
};

const chipOpen = {
  height: '26px',
  margin: '6px',
  padding: '0 0.25rem',
  color: '#33d067',
  backgroundColor: '#e7f9ed',
  fontFamily: styles.fontFamilyDefault,
};

const boxDateBug = {
  margin: '6px',
  color: '#7D879C',
  lineHeight: '1.5',
  whiteSpace: 'pre',
  textTransform: 'none',
};

const boxContentBug = {
  margin: '6px',
  color: '#7D879C',
  lineHeight: '1.5',
  whiteSpace: 'pre',
  textTransform: 'none',
};

export default {
  boxContentBug,
  boxDateBug,
  chipUrgent,
  boxContent,
  paperLink,
  chipOpen,
};
