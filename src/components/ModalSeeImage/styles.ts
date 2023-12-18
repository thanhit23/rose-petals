const boxWrapperModal = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'transparent',
  flex: '1 1 auto',
  overflowY: 'auto',
  maxWidth: '600px',
  width: '100%',
  borderRadius: '8px',
};

const boxImage = {
  width: '100%',
  textAlign: 'center',
  userSelect: 'none',
  objectFit: 'cover',
  maxHeight: '90vh',
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

export default {
  boxWrapperModal,
  btnClose,
  boxImage,
};
