const boxWrap = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const avatar = { m: 1, backgroundColor: '#9c27b0' };

const linkSingUp = {
  color: '#2b3445',
  fontWeight: 600,
  lineHeight: 1.5,
  marginLeft: '8px',
  borderBottom: '1px solid rgb(43, 52, 69)',
  textDecoration: 'none',
};

const boxForGotPassword = {
  display: 'flex',
  webkitBoxPack: 'center',
  justifyContent: 'center',
  backgroundColor: 'rgb(243, 245, 249)',
  borderRadius: '4px',
  paddingTop: '20px',
  paddingBottom: '20px',
  marginTop: '1.25rem',
};

const linkRegister = {
  color: '#2b3445',
  fontWeight: 600,
  lineHeight: 1.5,
  marginLeft: '8px',
  borderBottom: '1px solid rgb(43, 52, 69)',
  textDecoration: 'none',
};

const btnSubmit = {
  mt: 3,
  mb: 2,
  boxShadow: 'rgb(3 0 71 / 1%) 0px 0px 28px',
  '&:hover': {
    backgroundColor: '#e3364e',
    boxShadow: 'rgb(3 0 71 / 1%) 0px 0px 28px',
  },
};

const boxFooterLogin = {
  display: 'flex',
  webkitBoxPack: 'center',
  justifyContent: 'center',
  webkitBoxAlign: 'center',
  alignItems: 'center',
  marginTop: '1.25rem',
};

export default {
  boxForGotPassword,
  boxFooterLogin,
  linkRegister,
  linkSingUp,
  btnSubmit,
  boxWrap,
  avatar,
};
