const boxImg = {
  maxWidth: '100px',
  backgroundColor: '#E3E9EF',
};

const boxProduct = {
  display: 'flex',
  marginBottom: '16px',
  padding: '0 5px',
  gap: '16px',
  alignItems: 'center',
  '&:hover > a > div > .img-product': {
    transform: 'scale(1.12)',
  },
  overflow: 'hidden',
};

const img = {
  width: '100px',
  height: '100px',
  objectFit: 'cover',
  transition: '0.3s',
};

const boxLinkHover = {
  '&:hover > a > p': {
    color: '#D23F57!important',
  },
};

const boxTitleSort = {
  width: '200px',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
};

const boxTitle = {
  marginBottom: 0,
  marginTop: 0,
  fontSize: '16px',
  textTransform: 'none',
  lineHeight: 1.5,
  maxHeight: '48px',
  overflow: 'hidden',
  display: '-webkit-box',
  '-webkit-line-clamp': '2',
  '-webkit-box-orient': 'vertical',
};

const boxPrice = {
  marginBottom: 0,
  marginTop: 0,
  fontSize: '14px',
  fontWeight: 700,
  textTransform: 'none',
  whiteSpace: 'normal',
};

const rating = { fontSize: '14px' };

export default {
  boxLinkHover,
  boxProduct,
  boxTitle,
  boxPrice,
  boxImg,
  rating,
  img,
  boxTitleSort,
};
