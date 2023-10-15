import React from 'react';
import { connect } from 'react-redux';

import { compose } from 'redux';

import { State } from 'src/common/types';
import Loadings from 'src/components/Loading';

export interface Props {
  showLoading: boolean;
}

const Loading: React.FC<Props> = ({ showLoading }) => (showLoading ? <Loadings /> : <></>);

const mapStateToProps = ({
  global: {
    loading: { showLoading },
  },
}: State) => ({
  showLoading,
});

const withConnect = connect(mapStateToProps, null);

export default compose(withConnect)(Loading);
