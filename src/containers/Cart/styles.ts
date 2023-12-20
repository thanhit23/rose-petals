import { styles } from 'src/components/common';

const boxEmptyCart = {
  width: '200px',
  height: '200px',
  margin: 'auto',
};

const titleEmptyCart = {
  textAlign: 'center',
  fontWeight: '300',
  marginBottom: '15px',
};
const boxBtnEmptyCart = {
  margin: 'auto',
  width: '120px',
};

const btnEmptyCart = {
  fontFamily: styles.fontFamilyDefault,
  width: '100%',
  minWidth: '0px',
  minHeight: '0px',
  fontWeight: '600',
  textTransform: 'capitalize',
  boxShadow: '0px 0px 28px rgba(3, 0, 71, 0.01)',
  letterSpacing: 'inherit',
  '&:hover': {
    backgroundColor: '#E3364E',
    boxShadow: '0px 0px 28px rgba(3, 0, 71, 0.01)',
  },
};

export default {
  boxEmptyCart,
  titleEmptyCart,
  boxBtnEmptyCart,
  btnEmptyCart,
};
