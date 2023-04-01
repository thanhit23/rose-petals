import { styles } from '../common';

const paperInfoUser = {
  color: 'rgb(43, 52, 69)',
  boxShadow: 'rgba(3, 0, 71, 0.09) 0px 1px 3px',
  overflow: 'hidden',
  borderRadius: '8px',
  display: 'flex',
  padding: '14px 32px',
  height: '100%',
  WebkitBoxAlign: 'center',
  alignItems: 'center',
};

const boxInfoUser = {
  marginLeft: '12px',
  flex: '1 1 0px',
  '& > .wrap-info': {
    display: 'flex',
    WebkitBoxPack: 'justify',
    justifyContent: 'space-between',
    WebkitBoxAlign: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
};

const avatar = {
  height: '64px',
  width: '64px',
};

const nameUser = {
  marginBottom: '0px',
  marginTop: '0px',
  fontSize: '16px',
  fontWeight: '600',
  lineHeight: '1.5',
  textTransform: 'none',
  whiteSpace: 'normal',
};

const typographyRank = {
  fontSize: '14px',
  fontFamily: styles.fontFamilyDefault,
  color: 'rgb(125, 135, 156)',
  letterSpacing: '0.2em',
};

const typographyBalance = {
  fontSize: '14px',
  fontFamily: styles.fontFamilyDefault,
  letterSpacing: 'inherit',
  color: 'rgb(125, 135, 156)',
};

const typographyBalancePrice = {
  margin: '0px 0px 0px 4px',
  fontSize: '14px',
  fontFamily: styles.fontFamilyDefault,
  color: 'rgb(210, 63, 87)',
  letterSpacing: 'inherit',
};

const paperStats = {
  color: 'rgb(43, 52, 69)',
  boxShadow: 'rgba(3, 0, 71, 0.09) 0px 1px 3px',
  overflow: 'hidden',
  borderRadius: '8px',
  height: '100%',
  display: 'flex',
  padding: '1rem 1.25rem',
  WebkitBoxAlign: 'center',
  alignItems: 'center',
  flexDirection: 'column',
};

const paperStatsNumber = {
  marginBottom: '0px',
  marginTop: '0px',
  fontSize: '20px',
  fontWeight: '600',
  lineHeight: '1.5',
  color: 'rgb(210, 63, 87)',
  textTransform: 'none',
  whiteSpace: 'normal',
};

const paperStatsTitle = {
  fontSize: '12px',
  lineHeight: '1.5',
  color: 'rgb(125, 135, 156)',
  textAlign: 'center',
  textTransform: 'none',
  whiteSpace: 'normal',
};

const paperDetailInfo = {
  color: 'rgb(43, 52, 69)',
  boxShadow: 'rgba(3, 0, 71, 0.09) 0px 1px 3px',
  overflow: 'hidden',
  display: 'flex',
  flexWrap: 'wrap',
  WebkitBoxAlign: 'center',
  alignItems: 'center',
  borderRadius: '10px',
  cursor: 'auto',
  padding: '0.75rem 1.5rem',
};

const wrapperInfo = {
  display: 'flex',
  flexDirection: 'column',
  padding: '8px',
  flex: '1 1 0',
  '& > .title': {
    fontSize: '12px',
    lineHeight: '1.5',
    color: 'rgb(125, 135, 156)',
    marginBottom: '4px',
    textAlign: 'left',
    textTransform: 'none',
    whiteSpace: 'normal',
  },
};

export default {
  typographyBalancePrice,
  typographyBalance,
  paperStatsNumber,
  paperStatsTitle,
  paperDetailInfo,
  typographyRank,
  paperInfoUser,
  wrapperInfo,
  boxInfoUser,
  paperStats,
  nameUser,
  avatar,
};
