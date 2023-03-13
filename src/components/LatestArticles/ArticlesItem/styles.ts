const paperBoxImg = {
  display: 'flex',
  padding: '16px',
  maxHeight: '202px',
  cursor: 'pointer',
  overflow: 'hidden',
  position: 'relative',
};

const paper = {
  boxShadow: '0px 4px 16px rgb(43 52 69 / 10%)',
};

const boxImg = {
  width: '100%',
  objectFit: 'cover',
  transition: 'all 350ms',
  '&:hover': {
    transform: 'scale(1.12)',
  },
};

const boxTime = {
  display: 'flex',
  top: '30px',
  left: '30px',
  width: '50px',
  height: '50px',
  textAlign: 'center',
  position: 'absolute',
  boxShadow: '0px 1px 3px rgb(3 0 71 / 9%)',
  backgroundColor: '#F3F5F9',
  justifyContent: 'center',
  alignItems: 'center',
};

const boxComponentTime = {
  marginBottom: 0,
  marginTop: 0,
  fontSize: '14px',
  width: 'min-content',
  lineHeight: 1,
  fontWeight: 600,
  textTransform: 'none',
  whiteSpace: 'normal',
};

const boxInformation = {
  padding: '8px 16px 24px',
};

const linkOffCoupon = {
  color: '#2B3445',
  marginBottom: 0,
  marginTop: 0,
  fontSize: '17px',
  fontHeight: 700,
  lineHeight: 1.5,
  textTransform: 'none',
  whiteSpace: 'normal',
};

const boxDescription = {
  marginBottom: '24px',
  marginTop: '4px',
  fontSize: '14px',
  textTransform: 'none',
  whiteSpace: 'normal',
};

const linkReadMore = {
  textDecoration: 'none',
  textTransform: 'none',
  whiteSpace: 'normal',
  color: '#2B3445',
  gap: '8px',
  lineHeight: 1,
  fontWeight: 600,
  alignItems: 'center',
  position: 'relative',
  paddingBottom: '4px',
  display: 'inline-flex',
  '&:hover::after': {
    width: '100%',
    backgroundColor: '#D23F57',
  },
  '&:hover': {
    color: '#D23F57',
  },
  '&::after': {
    left: 0,
    bottom: 0,
    width: '0%',
    content: '" "',
    height: '2px',
    transition: '0.3s',
    position: 'absolute',
    backgroundColor: '#2B3445',
  },
};

const iconReadMore = {
  fontSize: '14px',
};

const linkDefault = { textDecoration: 'none' };

export default {
  boxComponentTime,
  boxInformation,
  boxDescription,
  linkOffCoupon,
  linkReadMore,
  iconReadMore,
  paperBoxImg,
  linkDefault,
  boxTime,
  boxImg,
  paper,
};
