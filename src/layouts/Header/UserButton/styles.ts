const buttonPerson = {
  width: '44px',
  height: '44px',
  borderRadius: '50%',
  minWidth: 'auto',
  color: '#0000008a',
  backgroundColor: '#F3F5F9',
  '&:hover': {
    backgroundColor: '#0000000a',
  },
};

const dialog = {
  '& div > div': {
    borderRadius: '8px',
    maxWidth: '500px',
  },
};

const paperLogin = {
  boxSizing: 'border-box',
  overflow: 'hidden',
  borderRadius: '8px',
  padding: '2rem 3rem',
};

export default {
  buttonPerson,
  paperLogin,
  dialog,
};
