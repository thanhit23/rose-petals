const gripItem = {
  display: 'flex',
  minHeight: '424px',
  flexDirection: 'column',
  justifyContent: 'center',
};

const boxComponentH1 = {
  fontSize: '50px',
  marginTop: 0,
  lineHeight: 1.2,
  marginBottom: '1.35rem',
};

const boxComponentP = {
  marginBottom: '21.6px',
  marginTop: '0px',
  fontSize: '14px',
  color: '#0F3460',
  textTransform: 'none',
  whiteSpace: 'normal',
};

const boxComponentImg = {
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  maxHeight: '400px',
  maxWidth: '100%',
};

const btnShopNow = {
  padding: '0.6rem 2.5rem',
  height: '44px',
  borderRadius: '4px',
  backgroundColor: '#222',
  textTransform: 'capitalize',
  fontSize: '0.9375rem',
  letterSpacing: 'inherit',
  fontWeight: 600,
  fontFamily:
    'Open Sans,Roboto,-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif',
  '&:hover': {
    backgroundColor: '#343434',
  },
};

export default {
  boxComponentImg,
  boxComponentH1,
  boxComponentP,
  btnShopNow,
  gripItem,
};
