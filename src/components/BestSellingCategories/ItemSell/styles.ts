const boxWrapperItem = {
  position: 'relative',
  cursor: 'pointer',
  overflow: 'hidden',
  borderRadius: '4px',
  height: '290px',
  '&:hover > div': {
    backgroundColor: '#222',
    color: '#fff',
  },
};

const boxComponentImg = {
  width: '100%',
  height: '100%',
  transition: 'all 0.3s',
  objectFit: 'cover',
  '&:hover': {
    transform: 'scale(1.12)',
  },
};

const boxWrapperTitle = {
  left: '10px',
  right: '10px',
  bottom: '10px',
  padding: '8px',
  textAlign: 'center',
  borderRadius: '2px',
  position: 'absolute',
  transition: 'all 0.3s',
  backgroundColor: 'rgba(255,255,255, .67)',
};

const title = {
  marginBottom: 0,
  marginTop: 0,
  fontSize: '17px',
  fontWeight: 600,
  lineHeight: 1.5,
  textTransform: 'none',
  whiteSpace: 'normal',
};

export default {
  boxComponentImg,
  boxWrapperTitle,
  boxWrapperItem,
  title,
};
