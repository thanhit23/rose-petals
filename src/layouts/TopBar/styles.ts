const boxTopBar = {
  fontSize: '12px',
  height: '40px',
  color: '#fff',
  background: '#2B3445',
  webkitTransition: 'height 300ms ease',
  transition: 'height 300ms ease',
};

const containerTopBar = {
  display: 'flex',
  gap: '2px',
  height: '100%',
  alignItems: 'center',
  justifyContent: 'space-between',
};

const boxChip = {
  display: 'flex',
  webkitBoxAlign: 'center',
  alignItems: 'center',
  gap: '8px',
};

const chipHot = {
  fontFamily:
    'Open Sans,Roboto,-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif',
  color: 'white',
  fontWeight: 700,
  backgroundColor: '#D23F57',
  height: '24px',
  '& span': {
    paddingLeft: '0.8rem',
    paddingRight: '0.8rem',
  },
};

const boxExpress = {
  lineHeight: 1.5,
  textTransform: 'none',
  whiteSpace: 'normal',
};

const dropDownBtn = {
  fontSize: '12px',
  marginRight: '1.25rem',
  fontWeight: 500,
  height: '40px',
};

const boxLink = {
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
};

const boxLanguage = {
  fontSize: '12px',
  marginLeft: '0.5rem',
  fontWeight: 600,
  lineHeight: 1.5,
  textTransform: 'none',
  whiteSpace: 'normal',
};

const linkSocialNetwork = { color: 'inherit', display: 'flex' };

const iconSocialNetwork = { fontSize: '16px' };

export default {
  linkSocialNetwork,
  iconSocialNetwork,
  containerTopBar,
  boxLanguage,
  dropDownBtn,
  boxExpress,
  boxTopBar,
  boxLink,
  boxChip,
  chipHot,
};
