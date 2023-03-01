import { connect } from 'react-redux';
import { compose } from 'redux';

import Loadings from '../../components/Loading';
import { Props, States } from './types';


function Loading({ showLoading }: Props) {
  return showLoading ? <Loadings /> : <></>;
}

const mapStateToProps = (state: States) => {
  const {
    global: {
      loading: { showLoading },
    },
  } = state;

  return {
    showLoading,
  };
};

const withConnect = connect(mapStateToProps, null);

export default compose(withConnect)(Loading);
