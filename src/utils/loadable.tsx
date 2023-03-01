import React, { lazy, Suspense } from 'react';

const loadable = (importFunc: any, { fallback = null }: { fallback: any }) => {
  const LazyComponent = lazy(importFunc);

  return (props: any) => (
    <Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </Suspense>
  );
}

export default loadable
