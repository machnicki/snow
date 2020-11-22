import React, { Suspense } from 'react';

const Prom1 = React.lazy(() => import('./prom1'));

const Spinner = () => (<div>loading...</div>);

const Promotion = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Prom1 />
    </Suspense>
  );
};

export default Promotion;
