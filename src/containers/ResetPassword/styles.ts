import { styles } from 'src/components/common';

const typography = {
  marginBottom: '24px',
  fontSize: '16px',
  fontWeight: '700',
  lineHeight: '1.5',
  textAlign: 'center',
  textTransform: 'none',
  whiteSpace: 'normal',
};

const boxResetPassword = {
  padding: '32px 48px',
  height: 'calc(100vh - 50px)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

const paper = {
  backgroundColor: 'rgb(255, 255, 255)',
  color: 'rgb(43, 52, 69)',
  transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  boxShadow: 'rgba(3, 0, 71, 0.09) 0px 8px 45px',
  borderRadius: '8px',
  width: '500px',
  padding: '2rem 3rem',
};

const btnSubmit = {
  minWidth: '0',
  minHeight: '0',
  fontWeight: '600',
  textTransform: 'capitalize',
  letterSpacing: 'inherit',
  fontFamily: styles.fontFamilyDefault,
  boxShadow: '0px 0px 28px rgba(3, 0, 71, 0.01)',
  '&:hover': {
    backgroundColor: '#E3364E',
    boxShadow: '0px 0px 28px rgba(3, 0, 71, 0.01)',
  },
};

const formSubmit = {
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
};

const bottomReset = {
  display: 'flex',
  justifyContent: 'center',
  gap: '6px',
  marginTop: '20px',
  fontSize: '15px',

  '& > a': {
    fontWeight: 600,
    textDecoration: 'underline',
  },
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
  typography,
  boxResetPassword,
  iconBtnShowPassword,
  visibilityIcon,
  visibilityOffIcon,
  formSubmit,
  btnSubmit,
  bottomReset,
  paper,
};
