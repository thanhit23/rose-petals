const boxPrice = {
  marginBottom: '0px',
  marginTop: '0px',
  fontSize: '20px',
  fontWeight: '700',
  lineHeight: '1.5',
  color: '#D23F57',
  textTransform: 'none',
  whiteSpace: 'normal',
};

const btnAdd = {
  fontFamily:
    'Open Sans,Roboto,-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif',
  fontWeight: 600,
  textTransform: 'capitalize',
};

const boxPriceSave = {
  lineHeight: '1.5',
  marginBottom: '16px',
  fontWeight: '600',
  color: '#7D879C',
  textTransform: 'none',
  whiteSpace: 'normal',
};

const boxPayment = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '8px',
  minWidth: '300px',
  minHeight: '200px',
  border: '1px solid',
  borderRadius: '8px',
  borderColor: '#DAE1E7',
};

const wrapIconDragHandle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const iconDragHandle = {
  marginBottom: '0px',
  marginTop: '0px',
  fontSize: '25px',
  fontWeight: '700',
  lineHeight: '1.5',
  color: '#7D879C',
  marginLeft: '8px',
  marginRight: '8px',
  textTransform: 'none',
  whiteSpace: 'normal',
};

const boxBoughtTogether = {
  padding: '16px',
  width: '100%',
  flex: '1 1 0',
  maxWidth: '160px',
  margin: '8px',
  boxShadow: '0px 1px 3px rgb(3 0 71 / 9%)',
};

const boxImgProduct = {
  width: '100%',
  marginBottom: '12px',
  borderRadius: '8px',
  overflow: 'hidden',
  position: 'relative',
  '&:hover::after': {
    background: 'rgba(0, 0, 0, 0.3)',
  },
  '&::after': {
    top: '0',
    left: '0',
    right: '0',
    zIndex: '1',
    bottom: '0',
    content: '" "',
    position: 'absolute',
    WebkitTransition: 'all 250ms ease-in-out',
    transition: 'all 250ms ease-in-out',
  },
};

const boxNameProduct = {
  lineHeight: '1.5',
  marginBottom: '4px',
  color: 'inherit',
  display: 'block',
  textTransform: 'none',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
};

const boxPriceProduct = {
  marginBottom: '0px',
  marginTop: '0px',
  fontSize: '14px',
  fontWeight: '600',
  lineHeight: '1.5',
  color: '#D23F57',
  marginRight: '4px',
  textTransform: 'none',
  whiteSpace: 'normal',
};

const boxPriceOffProduct = {
  lineHeight: '1.5',
  color: '#7D879C',
  textTransform: 'none',
  whiteSpace: 'normal',
};

const addIcon = {
  marginBottom: '0px',
  marginTop: '0px',
  fontSize: '25px',
  fontWeight: '700',
  lineHeight: '1.5',
  color: '#7D879C',
  marginLeft: '8px',
  marginRight: '8px',
  textTransform: 'none',
  whiteSpace: 'normal',
};

const wrapAddIcon = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export default {
  boxPriceOffProduct,
  wrapIconDragHandle,
  boxBoughtTogether,
  boxPriceProduct,
  boxNameProduct,
  iconDragHandle,
  boxImgProduct,
  boxPriceSave,
  wrapAddIcon,
  boxPayment,
  boxPrice,
  addIcon,
  btnAdd,
};
