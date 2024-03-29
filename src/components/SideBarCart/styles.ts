const btnOutlined = {
  fontSize: '0.875rem',
  border: '1px solid rgba(210, 63, 87, 0.5)',
  color: 'rgb(210, 63, 87)',
  width: '100%',
  minWidth: '0px',
  minHeight: '0px',
  textTransform: 'capitalize',
  height: '40px',
  '&:hover': {
    borderColor: 'rgb(210, 63, 87)',
    backgroundColor: 'rgba(210, 63, 87, 0.04)',
  },
};

const btnCart = {
  borderRadius: '50%',
  minWidth: 'auto',
  color: '#0000008a',
  padding: '10px',
  backgroundColor: '#F3F5F9',
  '&:hover': {
    backgroundColor: '#0000000a',
  },
};

const paperCart = {
  position: 'absolute' as const,
  top: 0,
  right: 0,
  bottom: 0,
  maxWidth: 380,
  backgroundColor: '#fff',
  boxShadow: 24,
  borderRadius: 'inherit',
};

const boxTitleCart = {
  display: 'flex',
  flexDirection: 'column',
};

const boxImgEmptyCart = {
  display: 'flex',
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
};

const boxTitlePaper = {
  display: 'flex',
  webkitBoxPack: 'justify',
  justifyContent: 'space-between',
  webkitBoxAlign: 'center',
  alignItems: 'center',
  marginLeft: '24px',
  marginRight: '24px',
  height: '74px',
};

const closeBtnBase = {
  zIndex: '10',
  padding: '8px',
  borderRadius: '50%',
  overflow: 'visible',
  color: 'rgba(0, 0, 0, 0.54)',
  transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  '&:hover': {
    backgroundColor: '#0000000a',
  },
};

const itemListCart = {
  marginBottom: 0,
  marginTop: 0,
  fontSize: '14px',
  lineHeight: 0,
  fontWeight: 500,
  textTransform: 'none',
  whiteSpace: 'normal',
};

const wrapperTitleCart = {
  display: 'flex',
  gap: '8px',
  alignItems: 'center',
  color: 'rgb(15, 52, 96)',
};

const badge = {
  '& > span': {
    backgroundColor: '#D23F57',
    fontFamily:
      'Open Sans,Roboto,-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif',
  },
};

export default {
  wrapperTitleCart,
  boxTitlePaper,
  closeBtnBase,
  itemListCart,
  btnOutlined,
  paperCart,
  btnCart,
  badge,
  boxTitleCart,
  boxImgEmptyCart,
};
