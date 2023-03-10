const buttonPerson = {
  borderRadius: '50%',
  minWidth: 'auto',
  color: '#0000008a',
  padding: '10px',
  backgroundColor: '#F3F5F9',
  '&:hover': {
    backgroundColor: '#0000000a',
  },
};

const dialog = {
  '& div > div': {
    borderRadius: '8px',
  },
};

const paperLogin = {
  boxSizing: 'border-box',
  overflow: 'hidden',
  borderRadius: '8px',
  width: '500px',
  padding: '2rem 3rem',
};

export default {
  buttonPerson,
  paperLogin,
  dialog,
};
