const paperProduct = {
  boxShadow: '0px 1px 3px rgb(3 0 71 / 9%)',
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  flexDirection: 'column',
  '&:hover': {
    boxShadow: '0px 8px 45px rgba(3, 0, 71, 0.09)',
    '> div > .box--icon': {
      opacity: 1,
    },
  },
};

const boxImage = {
  textAlign: 'center',
  position: 'relative',
  display: 'inline-block',
};

const boxIcon = {
  zIndex: '2',
  top: '7px',
  opacity: '0',
  right: '15px',
  display: 'flex',
  borderRadius: '10px',
  backgroundColor: '#dbdbdb',
  cursor: 'pointer',
  position: 'absolute',
  flexDirection: 'column',
  transition: 'all 0.3s ease-in-out',
};

const icon = {
  color: '#787878',
};

const imageProduct = {
  width: '260px',
  height: '260px',
  objectFit: 'cover',
};

const informationProduct = {
  flex: '1 1 0',
  minWidth: '0px',
  maxWidth: '190px',
  marginRight: '8px',
};

const nameProduct = {
  marginBottom: '8px',
  marginTop: '0px',
  fontSize: '14px',
  fontWeight: '600',
  lineHeight: '1.5',
  color: '#373F50',
  textTransform: 'none',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
};

const priceProduct = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  marginTop: '4px',
};

const boxAddToCart = {
  display: 'flex',
  width: '30px',
  WebkitBoxAlign: 'center',
  alignItems: 'center',
  flexDirection: 'column-reverse',
  WebkitBoxPack: 'justify',
  justifyContent: 'space-between',
};

export default {
  informationProduct,
  boxAddToCart,
  paperProduct,
  imageProduct,
  priceProduct,
  nameProduct,
  boxImage,
  boxIcon,
  icon,
};
