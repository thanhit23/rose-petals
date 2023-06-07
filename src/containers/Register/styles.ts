const boxRegister = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  minHeight: '100vh',
};

const paper = {
  backgroundColor: 'rgb(255, 255, 255)',
  color: 'rgb(43, 52, 69)',
  transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  boxShadow: 'rgba(3, 0, 71, 0.09) 0px 8px 45px',
  overflow: 'hidden',
  borderRadius: '8px',
  width: '500px',
  padding: '2rem 3rem',
};

const btnSubmit = {
  mt: 3,
  mb: 2,
  color: '#fff',
  backgroundColor: '#d23f57',
  boxShadow: 'rgb(3 0 71 / 1%) 0px 0px 28px',
  '&:hover': {
    color: '#fff',
    backgroundColor: '#e3364e',
    boxShadow: 'rgb(3 0 71 / 1%) 0px 0px 28px',
  },
};

const errorMessage = {
  '&:first-letter': {
    textTransform: 'capitalize',
  },
};

export default {
  errorMessage,
  boxRegister,
  btnSubmit,
  paper,
};
