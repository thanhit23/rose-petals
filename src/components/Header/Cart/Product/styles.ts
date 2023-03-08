const containerProduct = {
  display: 'flex',
  padding: '16px 20px',
  webkitBoxAlign: 'center',
  alignItems: 'center',
  borderBottom: '1px solid rgb(243, 245, 249)',
};

const btnPlusMinus = {
  border: '1px solid rgba(210, 63, 87, 0.5)',
  color: 'rgb(210, 63, 87)',
  minWidth: 0,
  minHeight: 0,
  fontWeight: 600,
  textTransform: 'capitalize',
  height: '32px',
  width: '32px',
  borderRadius: '300px',
};

const boxCounter = {
  fontWeight: 500,
  fontSize: '15px',
  marginTop: '3px',
  marginBottom: '3px',
};

const avatar = {
  lineHeight: 1,
  borderRadius: '50%',
  overflow: 'hidden',
  userSelect: 'none',
  marginLeft: '16px',
  marginRight: '16px',
  width: '76px',
  height: '76px',
};

const boxWrapBtnPlusMinus = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
};

const boxNameProduct = {
  marginBottom: 0,
  marginTop: 0,
  fontSize: '14px',
  fontWeight: 500,
  lineHeight: 1.5,
  textTransform: 'none',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
};

const linkNameProduct = {
  textDecoration: 'none',
  color: 'inherit',
};

const boxInformationProduct = {
  flex: '1 1 0%',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
};

const boxPrice = {
  fontSize: '10px',
  lineHeight: '1.5',
  color: 'rgb(125, 135, 156)',
  textTransform: 'none',
  whiteSpace: 'normal',
};

const boxTotalPrice = {
  fontWeight: 600,
  fontSize: '14px',
  color: 'rgb(210, 63, 87)',
  marginTop: '4px',
};

const buttonBaseClose = {
  padding: '8px',
  borderRadius: '50%',
  overflow: 'visible',
  color: 'rgba(0, 0, 0, 0.54)',
  transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  '&:hover': {
    backgroundColor: '#0000000a',
  },
};

export default {
  boxInformationProduct,
  boxWrapBtnPlusMinus,
  containerProduct,
  buttonBaseClose,
  linkNameProduct,
  boxNameProduct,
  boxTotalPrice,
  btnPlusMinus,
  boxCounter,
  boxPrice,
  avatar,
};
