import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
    to {
        transform: rotate(360deg);
    }
}
`;

const Loader = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50px;
    height: 50px;
    margin-top: 0;
    margin-left: -25px;
    border-radius: 50%;
    border: 2px solid ${(props) => props.theme.loader};
    border-top-color: ${(props) => props.theme.loaderTop};
    animation: ${rotate} 0.6s linear infinite;
`;

const Loading = () => {
    return <Loader />;
};

export default Loading;
