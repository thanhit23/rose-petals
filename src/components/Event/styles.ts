const containerEvent = {
  marginTop: '64px',
};

const boxItem = {
  maxHeight: '240px',
  overflow: 'hidden',
  borderRadius: '10px',
  position: 'relative',
  '&:hover > img': {
    transform: 'scale(1.12)',
  },
};

const boxImage = {
  transition: 'all 350ms',
};

const boxInformation = {
  top: 0,
  zIndex: 1,
  color: '#fff',
  height: '100%',
  display: 'flex',
  position: 'absolute',
  flexDirection: 'column',
  webkitBoxPack: 'center',
  justifyContent: 'center',
  left: '32px',
};

const boxInformationForWomen = {
  top: 0,
  zIndex: 1,
  color: '#fff',
  height: '100%',
  display: 'flex',
  position: 'absolute',
  flexDirection: 'column',
  webkitBoxPack: 'center',
  justifyContent: 'center',
  right: '32px',
  alignItems: 'flex-end',
};

const boxInformationBlackFriday = {
  padding: '32px',
  width: '100%',
  top: 0,
  zIndex: 1,
  color: '#fff',
  height: '100%',
  display: 'flex',
  position: 'absolute',
  webkitBoxPack: 'center',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'row',
};

const boxTitle = {
  marginBottom: 0,
  marginTop: 0,
  fontSize: '25px',
  fontWeight: 700,
  lineHeight: 1.5,
  textTransform: 'none',
  whiteSpace: 'normal',
};

const boxTimeEvent = {
  marginBottom: 0,
  marginTop: 0,
  fontSize: '14px',
  textTransform: 'none',
  whiteSpace: 'normal',
};

const divider = {
  borderColor: '#F3F5F9',
  borderWidth: '2px',
  marginTop: '12px',
  marginBottom: '12px',
  width: '50px',
};

const linkShop = {
  color: '#fff',
  lineHeight: 1.5,
  whiteSpace: 'normal',
  position: 'relative',
  paddingBottom: '2px',
  textDecoration: 'none',
  textTransform: 'uppercase',
};

const boxUpToBlackFriday = {
  marginBottom: 0,
  marginTop: 0,
  fontSize: '14px',
  fontWeight: 600,
  textTransform: 'none',
  whiteSpace: 'normal',
};

const boxTitleBlackFriday = {
  marginBottom: 0,
  marginTop: 0,
  fontSize: '20px',
  fontWeight: 700,
  textTransform: 'none',
  whiteSpace: 'normal',
};

const boxSaleBlackFriday = {
  marginBottom: 0,
  marginTop: 0,
  fontSize: '52px',
  fontWeight: 700,
  lineHeight: 1,
  textTransform: 'none',
  whiteSpace: 'normal',
};

const linkShopBlackFriday = {
  textDecoration: 'none',
};

const btnShopBlackFriday = {
  border: '1px solid rgba(78, 151, 253, 0.5)',
  color: '#4E97FD',
  minWidth: 0,
  minHeight: 0,
  fontWeight: 600,
  textTransform: 'capitalize',
  borderRadius: '8px',
  padding: '0.6rem 2.5rem',
  '&:hover': {
    border: '1px solid #4E97FD',
  },
};

export default {
  boxInformationBlackFriday,
  boxInformationForWomen,
  boxTitleBlackFriday,
  linkShopBlackFriday,
  btnShopBlackFriday,
  boxSaleBlackFriday,
  boxUpToBlackFriday,
  boxInformation,
  containerEvent,
  boxTimeEvent,
  boxImage,
  boxTitle,
  linkShop,
  boxItem,
  divider,
};
