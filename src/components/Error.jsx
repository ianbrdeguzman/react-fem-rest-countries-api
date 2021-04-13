import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <>
            <h1>Opps! Nothing here...</h1>
            <Link to='/'>
                <button>Back</button>
            </Link>
        </>
    );
};

export default Error;
