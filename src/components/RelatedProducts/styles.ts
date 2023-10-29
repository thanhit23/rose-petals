const relatedTitle = {
  marginTop: '16px',
  marginBottom: '16px',
};

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

const chipSale = {
  height: '24px',
  color: '#fff',
  backgroundColor: '#D23F57',
  zIndex: '1',
  top: '10px',
  left: '10px',
  paddingLeft: '3px',
  paddingRight: '3px',
  fontWeight: '600',
  fontSize: '10px',
  position: 'absolute',
  '& > span': {
    paddingRight: '8px',
    paddingLeft: '8px',
  },
};

const boxIcon = {
  zIndex: '2',
  top: '7px',
  opacity: '0',
  right: '15px',
  display: 'flex',
  cursor: 'pointer',
  position: 'absolute',
  flexDirection: 'column',
  transition: 'all 0.3s ease-in-out',
};

const icon = {
  color: '#00000042',
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

const btnAddToCart = {
  minWidth: 0,
  minHeight: 0,
  fontWeight: 600,
  textTransform: 'capitalize',
  padding: '3px',
};

export default {
  relatedTitle,
  informationProduct,
  btnAddToCart,
  boxAddToCart,
  paperProduct,
  imageProduct,
  priceProduct,
  nameProduct,
  boxImage,
  chipSale,
  boxIcon,
  icon,
};
