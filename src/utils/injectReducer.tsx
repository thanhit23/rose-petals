import React, { useContext, useEffect } from 'react';
import { ReactReduxContext } from 'react-redux';

import hoistNonReactStatics from 'hoist-non-react-statics';

import getInjectors from './reducerInjectors';

export interface TypeDefaultInjectors {
  key: string;
  reducer: () => any;
}

export default ({ key, reducer }: TypeDefaultInjectors) =>
  (WrappedComponent: any) => {
    class ReducerInjector extends React.Component {
      static WrappedComponent = WrappedComponent;

      static contextType = ReactReduxContext;

      static displayName = `withReducer(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

      constructor(props: any, context: any) {
        super(props, context);

        getInjectors(context.store).injectReducer(key, reducer);
      }

      render() {
        return <WrappedComponent {...this.props} />;
      }
    }

    return hoistNonReactStatics(ReducerInjector, WrappedComponent);
  };

const useInjectReducer = ({ key, reducer }: TypeDefaultInjectors) => {
  const context = useContext(ReactReduxContext);
  useEffect(() => {
    getInjectors(context.store).injectReducer(key, reducer);
  }, []);
};

export { useInjectReducer };
