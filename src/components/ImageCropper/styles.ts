import { styles } from '../common';

const boxWrapperModal = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'background.paper',
  flex: '1 1 auto',
  overflowY: 'auto',
  padding: '20px 24px',
  maxWidth: '600px',
  width: '100%',
  p: 4,
  borderRadius: '8px',
};

const boxWrapperInput = {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
};

const boxInput = {
  '&::file-selector-button': {
    border: 'none',
    padding: '8px 12px',
    borderRadius: '20px',
    cursor: 'pointer',
    marginRight: '10px',
    backgroundColor: '#fce9ec',
    color: '#d23f57',
    transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',

    '&:hover': {
      backgroundColor: '#d23f570a',
    },
  },
};

const boxImage = {
  marginTop: '20px',
  width: '100%',
  textAlign: 'center',
  userSelect: 'none',

  '& img': {
    maxHeight: '70vh !important',
  },
};

const boxNoImage = {
  margin: '20px auto 0',
  width: '80%',
  maxHeight: '70vh',
  opacity: '.7',
  objectFit: 'cover',
  userSelect: 'none',
};

const btnSetProfile = {
  fontFamily: styles.fontFamilyDefault,
  marginTop: '8px',
  width: '100%',
  minWidth: '0px',
  minHeight: '0px',
  fontWeight: '600',
  textTransform: 'capitalize',
  boxShadow: '0px 0px 28px rgba(3, 0, 71, 0.01)',
  letterSpacing: 'inherit',
  '&:hover': {
    backgroundColor: '#E3364E',
    boxShadow: '0px 0px 28px rgba(3, 0, 71, 0.01)',
  },
};

const btnClose = {
  position: 'absolute',
  fontSize: '1.5rem',
  padding: '8px',
  borderRadius: '50%',
  overflow: 'visible',
  color: 'rgba(0, 0, 0, 0.54)',
  transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  top: '3px',
  right: '3px',
  minWidth: 'inherit',
};

const boxCanvas = {
  marginTop: '10px',
  border: '1px solid #000',
  width: '150px',
  height: '150px',
  display: 'none',
};

export default {
  boxWrapperModal,
  btnClose,
  boxNoImage,
  boxCanvas,
  boxWrapperInput,
  btnSetProfile,
  boxInput,
  boxImage,
};
