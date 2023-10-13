const paperProduct = {
  '&:hover > div > .hover-box': {
    opacity: 1,
    right: '15px',
  },
};

const boxImage = {
  textAlign: 'center',
  position: 'relative',
  display: 'inline-block',
};

const boxQuantityPaginationProduct = {
  marginTop: '32px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  '> span': {
    lineHeight: '1.5',
    color: '#7D879C',
    textTransform: 'none',
    whiteSpace: 'normal',
  },
  '> div': {
    marginTop: 0,
  },
};

const hoverBox = {
  zIndex: '2',
  top: '7px',
  opacity: '0',
  right: '0',
  display: 'flex',
  cursor: 'pointer',
  position: 'absolute',
  flexDirection: 'column',
  transition: 'all 0.3s ease-in-out',
};

const colorIcon = { color: '#00000042' };

const wrapContentProduct = {
  flex: '1 1 0',
  minWidth: '0px',
  marginRight: '8px',
  '& .title': {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
};

const boxTitle = {
  marginBottom: '8px',
  marginTop: '0px',
  fontSize: '14px',
  fontWeight: '600',
  lineHeight: '1.5',
  color: '#373F50',
  textTransform: 'none',
};

const boxPrice = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  marginTop: '4px',
};

const boxAddCart = {
  display: 'flex',
  width: '30px',
  WebkitBoxAlign: 'center',
  alignItems: 'center',
  flexDirection: 'column-reverse',
  WebkitBoxPack: 'justify',
  justifyContent: 'space-between',
};

const btnIcon = {
  minWidth: '0',
  minHeight: '0',
  fontWeight: '600',
  textTransform: 'capitalize',
  padding: '3px',
};

export default {
  boxQuantityPaginationProduct,
  wrapContentProduct,
  paperProduct,
  boxAddCart,
  colorIcon,
  hoverBox,
  boxImage,
  boxTitle,
  boxPrice,
  btnIcon,
};
