import React, { Suspense } from 'react';

function Awaiting<T>(Component: React.ComponentType<T>) {
    return (props: T) => (
        <Suspense fallback={null}>
            <Component {...props} />
        </Suspense>
    );
}
export default Awaiting;
