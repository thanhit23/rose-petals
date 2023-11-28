import { styles } from '../common';

const modalConfirm = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  backgroundColor: 'background.paper',
  borderRadius: '8px',
  boxShadow: 24,
  p: 4,
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

const boxControl = {
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '8px',
};

const boxConfirm = {
  width: '112px',
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

const boxCancel = {
  width: '112px',
  color: '#999',
  '&:hover': {
    backgroundColor: '#F6F9FC',
    boxShadow: 'inherit',
  },
};

export default {
  modalConfirm,
  boxControl,
  boxConfirm,
  boxCancel,
  btnClose,
};
