const boxHeader = {
  zIndex: 3,
  position: 'relative',
  webkitTransition: 'height 250ms ease-in-out',
  transition: 'height 250ms ease-in-out',
};

const boxHeaderScroll = {
  left: 0,
  right: 0,
  zIndex: 1500,
  position: 'fixed',
  top: 0,
  boxShadow: 'rgb(43 52 69 / 10%) 0px 4px 16px',
  transition: 'all 350ms ease-in-out 0s',
  animation: '400ms cubic-bezier(0.4, 0, 0.2, 1) 0s 1 normal none running animation-1lit4vl',
};

const boxWrapperHeader = {
  height: '80px',
  backgroundColor: '#fff',
  zIndex: 3,
  position: 'relative',
  webkitTransition: 'height 250ms ease-in-out',
  transition: 'height 250ms ease-in-out',
};

const containerHeader = {
  display: 'flex',
  gap: '2px',
  height: '100%',
  alignItems: 'center',
};

const boxLogo = {
  display: 'flex',
  marginRight: '16px',
  minWidth: '170px',
  alignItems: 'center',
};

const boxWrapperFrom = {
  display: 'flex',
  flex: '1 1 0',
};

const boxFromControl = {
  flex: '1 1 0',
  maxWidth: '670px',
  marginLeft: 'auto',
  marginRight: 'auto',
};

const outlineInput = {
  font: 'inherit',
  letterSpacing: 'inherit',
  borderRadius: '1200px',
  paddingRight: 0,
  height: '44px',
  '& > input': {
    fontSize: '14px',
    color: '#646363',
  },
};

const outlineInputSearchIcon = {
  fontSize: '1.25rem',
  color: '#7D879C',
  marginRight: '6px',
};

export default {
  outlineInputSearchIcon,
  boxWrapperHeader,
  boxHeaderScroll,
  containerHeader,
  boxFromControl,
  boxWrapperFrom,
  outlineInput,
  boxHeader,
  boxLogo,
};
