const formControl = {
  position: 'relative',
};

const outlineInput = {
  font: 'inherit',
  letterSpacing: 'inherit',
  borderRadius: '1200px',
  paddingRight: 0,
  height: '44px',
  '& > input': {
    paddingRight: '38px',
    fontSize: '14px',
    color: '#646363',
  },
};

const outlineInputSearchIcon = {
  fontSize: '1.25rem',
  color: '#7D879C',
  marginRight: '6px',
};

const closeIcon = {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  right: '210px',
  cursor: 'pointer',
  borderRadius: '100%',
  padding: '2px',
  '&:hover': {
    backgroundColor: '#919eab14',
  },
};

const loadingIcon = {
  position: 'absolute',
  top: '27%',
  right: '210px',
  padding: '2px',
  opacity: '.5',
  animation: 'spinner .6s linear infinite',
  '@keyframes spinner': {
    from: {
      transform: 'rotate(0)',
    },
    to: {
      transform: 'rotate(360deg)',
    },
  },
};

const searchTitle = {
  display: 'flex',
  gap: '4px',
  padding: '10px 16px',
  fontSize: '14px',
  fontWeight: '600',
  cursor: 'pointer',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
};

const searchValue = {
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
};

const boxResult = {
  display: 'flex',
  flexDirection: 'column',
  width: {
    xs: '400px',
    md: '600px',
    lg: '670px',
  },
  borderRadius: '12px',
  overflow: 'hidden',
  backgroundColor: '#fff',
  boxShadow: '0px 1px 4px 0px rgba(0,0,0,0.14)',
};

const boxWrapper = {
  display: 'flex',
  overflow: 'hidden',
  gap: '14px',
  padding: '10px 16px',
  alignItems: 'center',
  transitionProperty: 'background-color',
  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
  transitionDuration: '150ms',
  '&:hover': {
    backgroundColor: '#919eab14',
  },
};

const boxImage = {
  width: '40px',
  height: '40px',
  borderRadius: '100%',
  objectFit: 'cover',
  flexShrink: 0,
};

const boxTitle = {
  fontSize: '14px',
  fontWeight: '500',
};

export default {
  formControl,
  outlineInput,
  outlineInputSearchIcon,
  loadingIcon,
  closeIcon,
  searchTitle,
  searchValue,
  boxResult,
  boxWrapper,
  boxImage,
  boxTitle,
};
