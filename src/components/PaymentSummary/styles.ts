const paperCalculator = {
  color: 'rgb(43, 52, 69)',
  boxShadow: 'rgba(3, 0, 71, 0.09) 0px 1px 3px',
  overflow: 'hidden',
  borderRadius: '8px',
  position: 'relative',
  padding: '1.5rem 1.75rem',
};

const orderCalculator = {
  display: 'flex',
  WebkitBoxPack: 'justify',
  justifyContent: 'space-between',
  WebkitBoxAlign: 'center',
  alignItems: 'center',
  marginBottom: '8px',
};

const orderCalculatorTitle = {
  marginBottom: '0px',
  marginTop: '0px',
  fontSize: '14px',
  color: 'rgb(125, 135, 156)',
  textTransform: 'none',
  whiteSpace: 'normal',
};

const orderCalculatorPrice = {
  marginBottom: '0px',
  marginTop: '0px',
  fontSize: '18px',
  fontWeight: '600',
  lineHeight: '1',
  textTransform: 'none',
  whiteSpace: 'normal',
};

const orderDivider = {
  borderColor: '#F3F5F9',
  marginBottom: '16px',
};

const orderTotal = {
  marginBottom: '0px',
  marginTop: '0px',
  fontSize: '25px',
  fontWeight: '600',
  lineHeight: '1',
  textAlign: 'right',
  textTransform: 'none',
  whiteSpace: 'normal',
};

export default {
  orderCalculatorTitle,
  orderCalculatorPrice,
  paperCalculator,
  orderCalculator,
  orderDivider,
  orderTotal,
};
