const boxItem = {
  display: 'flex',
  justifyContent: {
    md: 'center',
    xs: 'flex-start',
  },
  alignItems: 'center',
  gap: '16px',
  borderRight: {
    md: '1px solid #DAE1E7',
  },
};

const svgIcon = {
  fontSize: '40px',
};

const boxTitle = {
  marginBottom: 0,
  marginTop: 0,
  fontSize: '17px',
  fontWeight: 600,
  lineHeight: 1.3,
  textTransform: 'none',
  whiteSpace: 'normal',
};

const boxDescription = {
  lineHeight: 1.5,
  color: '#7D879C',
  textTransform: 'none',
  whiteSpace: 'normal',
};

export default {
  boxDescription,
  boxTitle,
  boxItem,
  svgIcon,
};
