import { styles } from '../common';
const paperAvatar = {
  color: 'rgb(43, 52, 69)',
  boxShadow: 'rgba(3, 0, 71, 0.09) 0px 1px 3px',
  overflow: 'hidden',
  borderRadius: '8px',
  position: 'relative',
  padding: '1.5rem 1.75rem',
};

const boxWrapAvatar = {
  display: 'flex',
  alignItems: 'flex-end',
  marginBottom: '24px',
};

const avatar = {
  height: '64px',
  width: '64px',
};

const boxUpload = {
  marginLeft: '-20px',
  '& > label': {
    color: '#0f3460',
    backgroundColor: 'rgb(227, 233, 239)',
  },
};

const iconCameraEnhance = { fontSize: '1.25rem' };

const datePicker = {
  width: '100%',
  '& > label': {
    letterSpacing: 'inherit',
    fontSize: '14px',
    transform: 'translate(14px, 9px)',
    '&.Mui-focused': {
      transform: 'translate(14px, -9px) scale(0.75)',
    },
    '&.MuiFormLabel-filled': {
      transform: 'translate(14px, -9px) scale(0.75)',
    },
  },
  '& > div': {
    fontSize: '14px',
    '& > input': {
      padding: '8.5px 14px',
    },
  },
};

const btnSave = {
  minWidth: '0px',
  minHeight: '0px',
  fontWeight: '600',
  letterSpacing: 'inherit',
  textTransform: 'capitalize',
  fontFamily: styles.fontFamilyDefault,
  boxShadow: 'rgba(43, 52, 69, 0.1) 0px 4px 16px',
  '&:hover': {
    backgroundColor: 'rgb(227, 54, 78)',
    boxShadow: 'rgba(3, 0, 71, 0.01) 0px 0px 28px',
  },
};

export default {
  iconCameraEnhance,
  boxWrapAvatar,
  paperAvatar,
  datePicker,
  boxUpload,
  btnSave,
  avatar,
};
