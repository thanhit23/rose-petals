const boxFeedback = {
  gap: '16px',
  display: 'flex',
  marginBottom: '32px',
};

const boxNameUser = {
  marginBottom: '0px',
  marginTop: '0px',
  fontSize: '16px',
  fontWeight: '600',
  lineHeight: '1.5',
  textTransform: 'none',
  whiteSpace: 'normal',
};

const boxDateFeedback = {
  lineHeight: '1.5',
  color: 'rgb(125, 135, 156)',
  textTransform: 'none',
  whiteSpace: 'normal',
};

const boxContentFeedback = {
  borderRadius: '10px',
  backgroundColor: 'rgb(243, 245, 249)',
  padding: '16px',
  marginTop: '16px',
};

const boxWriteContentFeedback = {
  display: 'inline-flex',
  flexDirection: 'column',
  position: 'relative',
  minWidth: '0px',
  padding: '0px',
  margin: '0px 0px 24px',
  border: '0px',
  verticalAlign: 'top',
  width: '100%',
  '& > div': {
    padding: '8.5px 14px',
    '& > textarea': {
      height: '160px !important',
    },
  },
};

const btnPostMessage = {
  backgroundColor: 'rgb(210, 63, 87)',
  boxShadow: 'rgba(43, 52, 69, 0.1) 0px 4px 16px',
  minWidth: '0px',
  minHeight: '0px',
  fontWeight: '600',
  textTransform: 'capitalize',
  display: 'block',
  margin: '0px 0px 0px auto',
  '&:hover': {
    backgroundColor: 'rgb(227, 54, 78)',
    boxShadow: 'rgba(3, 0, 71, 0.01) 0px 0px 28px',
  },
};

export default {
  boxWriteContentFeedback,
  boxContentFeedback,
  boxDateFeedback,
  btnPostMessage,
  boxNameUser,
  boxFeedback,
};
