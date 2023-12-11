import { styles } from '../common';

const paper = {
  backgroundColor: 'rgb(255, 255, 255)',
  color: 'rgb(43, 52, 69)',
  transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  boxShadow: 'rgba(3, 0, 71, 0.09) 0px 1px 3px',
  borderRadius: '8px',
  width: '100%',
  overflow: 'hidden',
  position: 'relative',
  marginBottom: '1.25rem',
};

const wrapImg = {
  '& > img': {
    display: 'block',
    height: '222.5px',
    objectFit: 'cover',
  },
};

const wrapContent = {
  display: 'flex',
  flexDirection: 'column',
  WebkitBoxPack: 'center',
  justifyContent: 'center',
  height: '100%',
  padding: '16px',
};

const productTitle = {
  marginBottom: '0.5rem',
  marginTop: '1.5rem',
  fontSize: '16px',
  fontWeight: '600',
  lineHeight: '1.5',
  textTransform: 'none',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
};

const wrapProductPrice = {
  display: 'flex',
  marginTop: '8px',
  marginBottom: '16px',
  WebkitBoxAlign: 'center',
  alignItems: 'center',
};

const productPrice = {
  marginBottom: '0px',
  marginTop: '0px',
  fontSize: '16px',
  fontWeight: '600',
  lineHeight: '1.5',
  color: 'rgb(210, 63, 87)',
  marginRight: '8px',
  textTransform: 'none',
  whiteSpace: 'normal',
};

const productDescription = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  webkitBoxOrient: 'vertical',
  webkitLineClamp: 2,
  color: 'rgb(125, 135, 156)',
};

const btnAddToCart = {
  minWidth: '0px',
  minHeight: '0px',
  fontWeight: '600',
  textTransform: 'capitalize',
  height: '32px',
  letterSpacing: 'inherit',
  fontFamily: styles.fontFamilyDefault,
  '&:hover': {
    backgroundColor: 'rgb(227, 54, 78)',
    boxShadow: 'rgba(3, 0, 71, 0.01) 0px 0px 28px',
  },
};

export default {
  wrapProductPrice,
  btnAddToCart,
  productPrice,
  productTitle,
  wrapContent,
  productDescription,
  wrapImg,
  paper,
};
