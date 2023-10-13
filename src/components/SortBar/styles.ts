const paperSortBar = {
  color: 'rgb(43, 52, 69)',
  boxShadow: 'rgba(3, 0, 71, 0.09) 0px 1px 3px',
  overflow: 'hidden',
  borderRadius: '8px',
  marginBottom: '55px',
  display: 'flex',
  flexWrap: 'wrap',
  WebkitBoxAlign: 'center',
  alignItems: 'center',
  WebkitBoxPack: 'justify',
  justifyContent: 'space-between',
  padding: {
    sx: '1.25rem 1.25rem 0.25rem',
    sm: '1rem 1.25rem',
    md: '0.5rem 1.25rem',
  },
};

const boxKeywordSearch = {
  marginBottom: '0px',
  marginTop: '0px',
  fontSize: '16px',
  fontWeight: '600',
  lineHeight: '1.5',
  textTransform: 'none',
  whiteSpace: 'normal',
};

const boxQuantityResult = {
  marginBottom: '0px',
  marginTop: '0px',
  fontSize: '14px',
  color: 'rgb(125, 135, 156)',
  textTransform: 'none',
  whiteSpace: 'normal',
};

const wrapperShortBy = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  flex: '1 1 0',
};

const boxOptionSort = {
  display: 'flex',
  WebkitBoxAlign: 'center',
  alignItems: 'center',
  columnGap: '32px',
  flexWrap: 'wrap',
  marginTop: '0.5rem',
  marginBottom: '0.5rem',
};

const boxShortBy = {
  marginBottom: '0px',
  marginTop: '0px',
  fontSize: '14px',
  color: '#7D879C',
  textTransform: 'none',
  whiteSpace: 'pre',
};

const formControl = { minWidth: 150 };

const selectOption = {
  '> div': {
    padding: '7.07px 14px',
    fontSize: '14px',
  },
};

const wrapperView = {
  display: 'flex',
  alignItems: 'center',
  marginTop: '0.25rem',
  marginBottom: '0.25rem',
};

const boxView = {
  marginBottom: '0px',
  marginTop: '0px',
  fontSize: '14px',
  color: '#7D879C',
  marginRight: '8px',
  textTransform: 'none',
  whiteSpace: 'normal',
};

export default {
  boxQuantityResult,
  boxKeywordSearch,
  wrapperShortBy,
  boxOptionSort,
  selectOption,
  paperSortBar,
  formControl,
  wrapperView,
  boxShortBy,
  boxView,
};
