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
  cursor: 'pointer',
  transitionProperty: 'filter',
  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
  transitionDuration: '150ms',

  '&:hover': {
    filter: 'brightness(80%)',
  },
};

const boxUpload = {
  marginLeft: '-20px',
  '& > label': {
    color: '#0f3460',
    backgroundColor: 'rgb(227, 233, 239)',
  },
};

const iconCameraEnhance = { fontSize: '1.25rem' };

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

const avatarDropdown = {
  backgroundColor: '#fff',
  boxShadow: '0px 1px 4px 0px rgba(0,0,0,0.14)',
  borderRadius: '6px',
  overflow: 'hidden',
};

const avatarDropdownItem = {
  display: 'flex',
  alignItems: 'center',
  padding: '10px',
  gap: '10px',
  cursor: 'pointer',
  transitionProperty: 'background-color',
  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
  transitionDuration: '150ms',

  '&:hover': {
    backgroundColor: '#919eab14',
  },

  '& > svg': {
    opacity: '.8',
    marginTop: '-3px',
  },
};

export default {
  iconCameraEnhance,
  boxWrapAvatar,
  avatarDropdown,
  avatarDropdownItem,
  paperAvatar,
  boxUpload,
  btnSave,
  avatar,
};
