import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaLongArrowAltLeft } from 'react-icons/fa';

const ErrorDiv = styled.div`
    margin-top: 5rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    a {
        padding: 0.5rem 1.5rem;
        font-family: inherit;
        margin: 2rem 0;
        border-radius: 3px;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
        span {
            margin-left: 0.5rem;
        }
    }
`;

const Error = () => {
    return (
        <ErrorDiv>
            <h1>
                Oops!
                <br /> Nothing here...
            </h1>
            <Link to='/'>
                <button>
                    <FaLongArrowAltLeft />
                    <span>Back</span>
                </button>
            </Link>
        </ErrorDiv>
    );
};

export default Error;
