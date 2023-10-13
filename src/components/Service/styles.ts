const serviceContainer = {
  marginTop: '4rem',
};

const boxItem = {
  display: 'grid',
  padding: '2rem 0',
  gap: '30px',
  paddingLeft: {
    md: 0,
    xs: '2rem',
  },
  paddingRight: {
    md: 0,
    xs: '2rem',
  },
  boxShadow: '0px 4px 16px rgb(43 52 69 / 10%)',
  gridTemplateColumns: {
    lg: 'repeat(4, 1fr)',
    md: 'repeat(2, 1fr)',
    sm: '1fr',
  },
  backgroundColor: '#fff',
};

export default {
  serviceContainer,
  boxItem,
};
