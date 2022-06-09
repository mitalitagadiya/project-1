//Hoc

import React from 'react';

function Loading(Component) {
    return function withLoading({ isLoading, data }) {
        if (isLoading) {
            return (
                <p>Loading....</p>
            )
        } else {
            return (
                <Component data={data} />
            )
        }
    }
}

export default Loading;