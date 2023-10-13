import { styles } from '../common';

const paperContainer = {
  color: 'rgb(43, 52, 69)',
  transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  boxShadow: 'rgba(3, 0, 71, 0.09) 0px 1px 3px',
  overflow: 'hidden',
  borderRadius: '8px',
  paddingBottom: '1.5rem',
};

const typographyTitle = {
  fontFamily: styles.fontFamilyDefault,
  padding: '26px 30px 1rem',
  color: 'rgb(125, 135, 156)',
  fontSize: '12px',
  letterSpacing: 'inherit',
};

const active = {
  color: 'rgb(210, 63, 87)',
  borderLeft: '4px solid rgb(210, 63, 87)',
  borderTopColor: 'rgb(210, 63, 87)',
  borderRightColor: 'rgb(210, 63, 87)',
  borderBottomColor: 'rgb(210, 63, 87)',
  '& > div > svg': {
    color: 'rgb(210, 63, 87)',
  },
};

const unActive = {
  color: 'inherit',
  borderLeft: '4px solid transparent',
  borderTopColor: 'transparent',
  borderRightColor: 'transparent',
  borderBottomColor: 'transparent',
};

const boxItem = {
  position: 'relative',
  transition: 'color 150ms ease-in-out 0s',
  display: 'flex',
  WebkitBoxAlign: 'center',
  alignItems: 'center',
  paddingLeft: '1.5rem',
  paddingRight: '1.5rem',
  marginBottom: '1.25rem',
  WebkitBoxPack: 'justify',
  justifyContent: 'space-between',
  '&:hover': {
    ...active,
  },
};

const boxTitle = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  '& > svg': {
    color: 'rgb(125, 135, 156)',
  },
};

export default {
  typographyTitle,
  paperContainer,
  boxTitle,
  unActive,
  boxItem,
  active,
};
