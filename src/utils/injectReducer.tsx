import React, { useEffect, useContext } from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { ReactReduxContext } from 'react-redux';

import getInjectors from './reducerInjectors';

/**
 * Dynamically injects a reducer
 *
 * @param {string} key A key of the reducer
 * @param {function} reducer A reducer that will be injected
 *
 */
interface TypeDefault {
   key: string,
   reducer: () => {}
}
export default ({ key, reducer }: TypeDefault) =>
  (WrappedComponent: any) => {
    class ReducerInjector extends React.Component {
      static WrappedComponent = WrappedComponent;

      // eslint-disable-next-line react/static-property-placement
      static contextType = ReactReduxContext;

      // eslint-disable-next-line react/static-property-placement
      static displayName = `withReducer(${
        WrappedComponent.displayName || WrappedComponent.name || 'Component'
      })`;

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

const useInjectReducer = ({ key, reducer }: TypeDefault) => {
  const context = useContext(ReactReduxContext);
  useEffect(() => {
    getInjectors(context.store).injectReducer(key, reducer);
  }, []);
};

export { useInjectReducer };
