const containerEventNotificationBanner = {
  marginTop: '64px',
  flexDirection: 'column',
  color: '#fff',
  textAlign: 'center',
  padding: '6rem 2rem',
  backgroundSize: 'cover',
  backgroundColor: '#AEB4BE',
  backgroundRepeat: 'no-repeat',
  backgroundImage: 'url(https://bazar-react.vercel.app/assets/images/banners/banner-11.jpg)',
};

const boxTimeSaleOff = {
  marginBottom: 0,
  marginTop: 0,
  fontSize: '30px',
  fontWeight: 400,
  lineHeight: 1,
  textTransform: 'none',
  whiteSpace: 'normal',
};

const boxSaleOff = {
  lineHeight: 1.5,
  color: '#D23F57',
  textTransform: 'none',
  whiteSpace: 'normal',
};

const boxTitle = {
  marginBottom: '8px',
  marginTop: 0,
  fontSize: '50px',
  fontWeight: 700,
  lineHeight: 1,
  textTransform: 'none',
  whiteSpace: 'normal',
};

const boxShipping = {
  marginBottom: '32px',
  marginTop: 0,
  fontSize: '18px',
  fontWeight: 600,
  textTransform: 'none',
  whiteSpace: 'normal',
};

const btnShop = {
  backgroundColor: '#222',
  boxShadow: '0px 4px 16px rgb(43 52 69 / 10%)',
  minWidth: 0,
  minHeight: 0,
  fontWeight: 600,
  textTransform: 'capitalize',
  color: '#fff',
  borderRadius: 0,
  transition: 'all 0.3s',
  padding: '0.6rem 2.5rem',
  fontSize: '0.9375rem',
  lineHeight: 1.75,
  '&:hover': {
    backgroundColor: '#343434',
  },
};

export default {
  containerEventNotificationBanner,
  boxTimeSaleOff,
  boxShipping,
  boxSaleOff,
  boxTitle,
  btnShop,
};
