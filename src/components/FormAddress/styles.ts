import { styles } from '../common';

const paperForm = {
  color: '#2B3445',
  boxShadow: '0px 1px 3px rgba(3, 0, 71, 0.09)',
  overflow: 'hidden',
  borderRadius: '8px',
  position: 'relative',
  padding: '1.5rem 1.75rem',
};

const btnSaveChange = {
  fontFamily: styles.fontFamilyDefault,
  letterSpacing: 'inherit',
  boxShadow: '0px 4px 16px rgba(43, 52, 69, 0.1)',
  minWidth: '0',
  minHeight: '0',
  fontWeight: '600',
  textTransform: 'capitalize',
};

const labelError = {
  fontFamily: styles.fontFamilyDefault,
  fontSize: '14px',
  letterSpacing: 'inherit',
};

export default {
  btnSaveChange,
  labelError,
  paperForm,
};
