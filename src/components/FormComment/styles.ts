import { styles } from '../common';

const wrapReview = {
  marginBottom: '32px',
  maxWidth: '600px',
};

const wrapInformationUser = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '16px',
};

const avatar = {
  width: '48px',
  height: '48px',
};

const nameUser = {
  marginBottom: '4px',
  marginTop: '0px',
  fontSize: '16px',
  fontWeight: '600',
  lineHeight: '1.5',
  textTransform: 'none',
  whiteSpace: 'normal',
};

const averageRating = {
  margin: '0px 10px',
  fontSize: '14px',
  fontWeight: '600',
  lineHeight: '1.5',
  textTransform: 'none',
  whiteSpace: 'normal',
};

const ratingTime = {
  lineHeight: '1.5',
  textTransform: 'none',
  whiteSpace: 'normal',
};

const comment = {
  marginBottom: '0px',
  marginTop: '0px',
  fontSize: '14px',
  color: 'rgb(75, 86, 107)',
  textTransform: 'none',
  whiteSpace: 'normal',
};

const titleReviewProduct = {
  marginBottom: '20px',
  marginTop: '56px',
  fontSize: '25px',
  fontWeight: '600',
  lineHeight: '1.5',
  textTransform: 'none',
  whiteSpace: 'normal',
};

const wrapRating = {
  display: 'flex',
  marginBottom: '12px',
  gap: '4px',
};

const boxYourRating = {
  marginBottom: '0px',
  marginTop: '0px',
  fontSize: '16px',
  fontWeight: '600',
  lineHeight: '1.5',
  color: 'rgb(75, 86, 107)',
  textTransform: 'none',
  whiteSpace: 'normal',
};

const boxRequired = {
  marginBottom: '0px',
  marginTop: '0px',
  fontSize: '16px',
  fontWeight: '600',
  lineHeight: '1.5',
  color: 'rgb(233, 69, 96)',
  textTransform: 'none',
  whiteSpace: 'normal',
};

const boxYourReview = {
  marginBottom: '0px',
  marginTop: '0px',
  fontSize: '16px',
  fontWeight: '600',
  lineHeight: '1.5',
  color: 'rgb(75, 86, 107)',
  textTransform: 'none',
  whiteSpace: 'normal',
};

const btnSubmit = {
  minWidth: '0px',
  minHeight: '0px',
  fontWeight: '600',
  textTransform: 'capitalize',
  height: '32px',
  letterSpacing: 'inherit',
  fontFamily: styles.fontFamilyDefault,
  '&:hover': {
    backgroundColor: 'rgb(227, 54, 78)',
    boxShadow: 'rgba(3, 0, 71, 0.01) 0px 0px 28px',
  },
};

export default {
  wrapInformationUser,
  titleReviewProduct,
  boxYourReview,
  boxYourRating,
  averageRating,
  boxRequired,
  ratingTime,
  wrapRating,
  wrapReview,
  nameUser,
  comment,
  avatar,
  btnSubmit,
};
