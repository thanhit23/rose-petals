const formControlLabel = { display: 'flex' };

const btnSubmit = {
  mt: 3,
  mb: 2,
  backgroundColor: '#d23f57',
  color: '#fff',
  boxShadow: 'rgb(43 52 69 / 10%) 0px 4px 16px',
  '&:hover': {
    backgroundColor: '#e3364e',
    boxShadow: 'rgb(3 0 71 / 1%) 0px 0px 28px',
  },
};

const linkSingUp = {
  color: '#2b3445',
  fontWeight: 600,
  lineHeight: 1.5,
  marginLeft: '8px',
  borderBottom: '1px solid rgb(43, 52, 69)',
  textDecoration: 'none',
};

const boxPassword = { position: 'relative' };

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

const boxFooterLogin = {
  display: 'flex',
  webkitBoxPack: 'center',
  justifyContent: 'center',
  webkitBoxAlign: 'center',
  alignItems: 'center',
  marginTop: '1.25rem',
};

const iconBtnShowPassword = {
  padding: '5px',
  position: 'absolute',
  top: '50%',
  right: '10px',
  transform: 'translateY(-50%)',
};

const visibilityOffIcon = {
  color: '#dae1e7',
  fontSize: '1.25rem',
};

const visibilityIcon = {
  color: '#7d879c',
  fontSize: '1.25rem',
};

export default {
  iconBtnShowPassword,
  boxForGotPassword,
  visibilityOffIcon,
  formControlLabel,
  boxFooterLogin,
  visibilityIcon,
  linkRegister,
  boxPassword,
  linkSingUp,
  btnSubmit,
};
