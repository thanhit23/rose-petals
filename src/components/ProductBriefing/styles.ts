const boxImgItem = {
  display: 'flex',
  WebkitBoxPack: 'center',
  justifyContent: 'center',
  WebkitBoxAlign: 'center',
  alignItems: 'center',
  width: '64px',
  height: '64px',
  minWidth: '64px',
  backgroundColor: 'white',
  border: '1px solid rgb(210, 63, 87)',
  borderRadius: '10px',
  marginLeft: 0,
  marginRight: '10px',
};

const boxContainerImg = {
  display: 'flex',
  WebkitBoxPack: 'center',
  justifyContent: 'center',
  marginBottom: '48px',
};

const boxWrapperImg = {
  boxSizing: 'border-box',
  display: 'inline-block',
  overflow: 'hidden',
  width: 'initial',
  height: 'initial',
  background: 'none',
  opacity: '1',
  border: '0px',
  margin: '0px',
  padding: '0px',
  position: 'relative',
  maxWidth: '100%',
};

const boxImg = {
  position: 'absolute',
  inset: '0px',
  boxSizing: 'border-box',
  padding: '0px',
  border: 'none',
  margin: 'auto',
  display: 'block',
  width: '0px',
  height: '0px',
  minWidth: '100%',
  maxWidth: '100%',
  minHeight: '100%',
  maxHeight: '100%',
  objectFit: 'contain',
};

const boxTitle = {
  marginBottom: '8px',
  marginTop: '0px',
  fontSize: '30px',
  fontWeight: '700',
  lineHeight: '1.5',
  textTransform: 'none',
  whiteSpace: 'normal',
};

const boxWrapBrand = {
  display: 'flex',
  WebkitBoxAlign: 'center',
  alignItems: 'center',
  marginBottom: '8px',
};

const boxBrand = {
  marginBottom: '0px',
  marginTop: '0px',
  fontSize: '14px',
  fontWeight: '600',
  lineHeight: '1.5',
  textTransform: 'none',
  whiteSpace: 'normal',
};

const boxRated = {
  display: 'flex',
  WebkitBoxAlign: 'center',
  alignItems: 'center',
  marginBottom: '16px',
};

const wrapRating = {
  marginLeft: '8px',
  marginRight: '8px',
  lineHeight: '1',
};

const rating = { fontSize: '1.25rem' };

const quantityRating = {
  marginBottom: '0px',
  marginTop: '0px',
  fontSize: '14px',
  fontWeight: '600',
  lineHeight: '1.5',
  textTransform: 'none',
  whiteSpace: 'normal',
};

const option = {
  marginBottom: '8px',
  marginTop: '0px',
  fontSize: '14px',
  fontWeight: '600',
  lineHeight: '1.5',
  textTransform: 'none',
  whiteSpace: 'normal',
};

const optionItem = {
  borderRadius: '4px',
  margin: '0px 8px 0px 0px',
  '& > span': {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    paddingLeft: '12px',
    paddingRight: '12px',
    whiteSpace: 'nowrap',
  },
};

const boxType = {
  marginBottom: '8px',
  marginTop: '0px',
  fontSize: '14px',
  fontWeight: '600',
  lineHeight: '1.5',
  textTransform: 'none',
  whiteSpace: 'normal',
};

const typeItem = {
  borderRadius: '4px',
  margin: '0px 8px 0px 0px',
  '& > span': {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    paddingLeft: '12px',
    paddingRight: '12px',
    whiteSpace: 'nowrap',
  },
};

const wrapPrice = {
  paddingTop: '8px',
  marginBottom: '24px',
};

const boxPrice = {
  marginBottom: '4px',
  marginTop: '0px',
  fontSize: '25px',
  fontWeight: '700',
  lineHeight: '1',
  color: 'rgb(210, 63, 87)',
  textTransform: 'none',
  whiteSpace: 'normal',
};

const btnAddCart = {
  backgroundColor: 'rgb(210, 63, 87)',
  boxShadow: 'rgb(43 52 69 / 10%) 0px 4px 16px',
  minWidth: '0px',
  minHeight: '0px',
  fontWeight: '600',
  textTransform: 'capitalize',
  height: '40px',
  fontSize: '0.875rem',
  lineHeight: '1.75',
  padding: '6px 1.75rem',
  borderRadius: '4px',
  fontFamily:
    '"Open Sans", Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
  '&:hover': {
    textDecoration: 'none',
    backgroundColor: 'rgb(227, 54, 78)',
    boxShadow: 'rgb(3 0 71 / 1%) 0px 0px 28px',
  },
};

export default {
  boxContainerImg,
  quantityRating,
  boxWrapperImg,
  boxWrapBrand,
  boxImgItem,
  wrapRating,
  optionItem,
  btnAddCart,
  wrapPrice,
  typeItem,
  boxTitle,
  boxBrand,
  boxRated,
  boxPrice,
  boxType,
  option,
  boxImg,
  rating,
};
