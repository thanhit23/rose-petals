const boxImg = {
  maxWidth: '100px',
  backgroundColor: '#E3E9EF',
};

const boxProduct = {
  display: 'flex',
  marginBottom: '16px',
  gap: '16px',
  alignItems: 'center',
  '&:hover > a > div > .img-product': {
    transform: 'scale(1.12)',
  },
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

const boxTitle = {
  marginBottom: 0,
  marginTop: 0,
  fontSize: '16px',
  textTransform: 'none',
  whiteSpace: 'normal',
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
};
