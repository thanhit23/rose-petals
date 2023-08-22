const boxFooter = {
  backgroundColor: '#222935',
};

const containerFooter = {
  padding: '1rem',
  color: 'white',
};

const wrapperGrid = {
  paddingTop: '80px',
  paddingBottom: '80px',
  overflow: 'hidden',
};

const boxLogo = {
  marginBottom: '20px',
  display: 'block',
};

const boxDescription = {
  marginBottom: '20px',
  marginTop: 0,
  fontSize: '14px',
  color: '#AEB4BE',
  textTransform: 'none',
  whiteSpace: 'normal',
};

const boxDownload = {
  display: 'flex',
  flexWrap: 'wrap',
  margin: '-8px',
};

const boxDownloadCHPlay = {
  display: 'flex',
  margin: '8px',
  gap: '8px',
  padding: '10px 16px',
  color: 'white',
  backgroundColor: '#161d2b',
  borderRadius: '5px',
  alignItems: 'center',
};

const boxDownloadAppStore = {
  display: 'flex',
  margin: '8px',
  gap: '8px',
  padding: '10px 16px',
  color: 'white',
  backgroundColor: '#161d2b',
  borderRadius: '5px',
  alignItems: 'center',
};

const boxTitleAboutUs = {
  fontSize: '18px',
  fontWeight: 600,
  marginBottom: '12px',
  lineHeight: 1,
  color: 'white',
};

const boxAddress = {
  paddingTop: '4.8px',
  paddingBottom: '4.8px',
  color: '#AEB4BE',
};

const boxEmail = {
  paddingTop: '4.8px',
  paddingBottom: '4.8px',
  color: '#AEB4BE',
};

const boxPhoneNumber = {
  paddingTop: '4.8px',
  paddingBottom: '4.8px',
  color: '#AEB4BE',
  marginBottom: '16px',
};

const boxSocialNetwork = {
  display: 'flex',
  marginLeft: '-5px',
  marginRight: '-5px',
};

const btnSocialNetwork = {
  transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  margin: '4px',
  fontSize: '12px',
  padding: '10px',
  backgroundColor: 'rgba(0,0,0,0.2)',
  borderRadius: '50%',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
  },
};

export default {
  boxDownloadAppStore,
  boxDownloadCHPlay,
  btnSocialNetwork,
  boxSocialNetwork,
  boxTitleAboutUs,
  containerFooter,
  boxDescription,
  boxPhoneNumber,
  wrapperGrid,
  boxDownload,
  boxAddress,
  boxFooter,
  boxEmail,
  boxLogo,
};
