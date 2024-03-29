const containerNavbar = {
  display: 'flex',
  justifyContent: 'space-between',
};

const paper = {
  display: {
    xs: 'none',
    lg: 'flex',
  },
  height: '60px',
  alignItems: 'center',
  boxShadow: 'none',
};

const boxBtn = {
  display: 'flex',
  flex: '1 1 0',
  marginLeft: '10px',
  color: '#7D879C',
  textTransform: 'none',
  whiteSpace: 'normal',
};

const categoryBtn = {
  color: 'inherit',
  borderColor: 'currentColor',
  minWidth: 0,
  minHeight: 0,
  fontWeight: 600,
  textTransform: 'capitalize',
  width: '278px',
  height: '40px',
  backgroundColor: ' #F6F9FC',
  borderRadius: '4px',
  padding: '6px 8px',
};

const boxListCategories = {
  display: 'flex',
  gap: '32px',
};

const boxCategoryItem = {
  display: 'flex',
  alignItems: 'center',
};

export default {
  boxListCategories,
  containerNavbar,
  boxCategoryItem,
  categoryBtn,
  boxBtn,
  paper,
};
