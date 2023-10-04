import React, { Suspense, lazy } from 'react';

const loadable = (importFunc: any, { fallback = null }: { fallback: any }) => {
  const LazyComponent = lazy(importFunc);

  // eslint-disable-next-line react/display-name
  return (props: any) => (
    <Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

export default loadable;
