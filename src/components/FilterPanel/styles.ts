import { styles } from '../common';

const wrapPaper = {
  boxShadow: '0px 1px 3px rgba(3, 0, 71, 0.09)',
  borderRadius: '8px',
  padding: '18px 27px',
  overflow: 'auto',
};

const boxTitleCategory = {
  marginBottom: '10px',
  marginTop: '0px',
  fontSize: '14px',
  fontWeight: '600',
  lineHeight: '1.5',
  textTransform: 'none',
  whiteSpace: 'normal',
};

const wrapDropdownCategoryItem = {
  cursor: 'pointer',
  overflow: 'hidden',
  transition: 'height 250ms ease-in-out 0s',
};

const boxDropdownCategoryItem = {
  display: 'flex',
  padding: '6px 0px',
  color: 'rgb(125, 135, 156)',
  WebkitBoxAlign: 'center',
  alignItems: 'center',
  WebkitBoxPack: 'justify',
  justifyContent: 'space-between',
};

const boxBathPreparations = {
  lineHeight: '1.5',
  cursor: 'pointer',
  marginRight: '9px',
  textTransform: 'none',
  whiteSpace: 'normal',
};

const boxBathPreparationsItem = {
  marginBottom: '0px',
  marginTop: '0px',
  fontSize: '14px',
  paddingLeft: '22px',
  paddingTop: '6px',
  paddingBottom: '6px',
  color: '#7D879C',
  textTransform: 'none',
  whiteSpace: 'normal',
  cursor: 'pointer',
};

const boxCategoryItem = {
  marginBottom: '0px',
  marginTop: '0px',
  fontSize: '14px',
  paddingTop: '6px',
  paddingBottom: '6px',
  color: '#7D879C',
  textTransform: 'none',
  whiteSpace: 'normal',
};

const divider = {
  borderColor: '#F3F5F9',
  marginTop: '16px',
  marginBottom: '24px',
};

const flex = { display: 'flex' };

const dividerTwo = {
  borderColor: '#F3F5F9',
  marginTop: '24px',
  marginBottom: '24px',
};

const boxPriceRange = {
  marginBottom: '16px',
  marginTop: '0px',
  fontSize: '14px',
  fontWeight: '600',
  lineHeight: '1.5',
  textTransform: 'none',
  whiteSpace: 'normal',
};

const boxQuantityPriceRange = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const labelFormControl = {
  margin: '0',
  fontSize: '14px',
  fontFamily: styles.fontFamilyDefault,
  fontWeight: '400',
  lineHeight: '1.5',
};

const boxBridge = {
  marginBottom: '0px',
  marginTop: '0px',
  fontSize: '16px',
  fontWeight: '600',
  lineHeight: '1.5',
  color: '#7D879C',
  paddingLeft: '8px',
  paddingRight: '8px',
  textTransform: 'none',
  whiteSpace: 'normal',
};

const colors = {
  flexShrink: '0',
  width: '25px',
  height: '25px',
  cursor: 'pointer',
  borderRadius: '50%',
};

const bg_black = { backgroundColor: '#1C1C1C' };
const bg_pink = { backgroundColor: '#FF7A7A' };
const bg_yellow = { backgroundColor: '#FFC672' };
const bg_light_green = { backgroundColor: '#84FFB5' };
const bg_blue = { backgroundColor: '#70F6FF' };
const bg_purple_blood = { backgroundColor: '#6B7AFF' };

const wrapColors = {
  display: 'flex',
  marginBottom: '16px',
  flexWrap: 'wrap',
  gap: '8px',
};

export default {
  wrapDropdownCategoryItem,
  boxDropdownCategoryItem,
  boxBathPreparationsItem,
  boxQuantityPriceRange,
  boxBathPreparations,
  labelFormControl,
  boxTitleCategory,
  boxCategoryItem,
  bg_purple_blood,
  bg_light_green,
  boxPriceRange,
  wrapColors,
  dividerTwo,
  bg_yellow,
  boxBridge,
  wrapPaper,
  bg_black,
  bg_blue,
  bg_pink,
  divider,
  colors,
  flex,
};
