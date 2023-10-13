import { styles } from '../../components/common';

const boxNavigate = {
  display: 'flex',
  width: '100vw',
  left: '0',
  right: '0',
  bottom: '0',
  position: 'fixed',
  justifyContent: 'space-around',
  zIndex: '1201',
  height: '64px',
  backgroundColor: '#fff',
  boxShadow: '0px 1px 4px 3px rgba(0, 0, 0, 0.1)',
};

const linkPage = {
  position: 'relative',
  transition: 'color 150ms ease-in-out',
  color: 'inherit',
  flex: '1 1 0',
  display: 'flex',
  fontSize: '13px',
  WebkitBoxAlign: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  WebkitBoxPack: 'center',
  justifyContent: 'center',
  '& > svg': {
    marginBottom: '4px',
  },
  '& > span > svg': {
    marginBottom: '4px',
    fontSize: '1.25rem',
  },
};

const btnCart = {
  borderRadius: '50%',
  minWidth: 'auto',
  color: '#0000008a',
  padding: '10px',
  backgroundColor: '#F3F5F9',
  '&:hover': {
    backgroundColor: '#0000000a',
  },
};

const badge = {
  '& > span': {
    backgroundColor: '#D23F57',
    fontFamily: styles.fontFamilyDefault,
  },
};

export default {
  boxNavigate,
  linkPage,
  btnCart,
  badge,
};
