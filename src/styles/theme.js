import { createGlobalStyle } from 'styled-components';
import Font from '../fonts/NunitoSans-Light.ttf';

export const darkTheme = {
    fontColor: 'hsl(0, 0%, 100%)',
    input: 'hsl(0, 0%, 52%)',
    background: 'hsl(207, 26%, 17%)',
    elements: 'hsl(209, 23%, 22%)',
};

export const lightTheme = {
    fontColor: 'hsl(200, 15%, 8%)',
    input: 'hsl(0, 0%, 52%)',
    background: 'hsl(0, 0%, 98%)',
    elements: 'hsl(0, 0%, 100%)',
};

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'NunitoSans';
        src: url(${Font}) format('ttf');
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Nunito Sans', sans-serif;
        font-size: 14px;
        background-color: ${(props) => props.theme.background};
        color: ${(props) => props.theme.fontColor};
    }
    nav {
        background-color: ${(props) => props.theme.elements};
    }
    button {
        cursor: pointer;
        color: ${(props) => props.theme.fontColor};
        border: none;
        outline: none;
        background-color: transparent;
        font-family: 'Nunito Sans', sans-serif;
    }
    span {
        font-family: 'Nunito Sans', sans-serif;
    }
    input {
        font-family: inherit;
        color: ${(props) => props.theme.fontColor};
        background-color: ${(props) => props.theme.elements};
    }
    ::-webkit-input-placeholder {
        color: ${(props) => props.theme.fontColor};
        font-family: inherit;
        font-size: 12px;
    }
    :-ms-input-placeholder {
        color: ${(props) => props.theme.fontColor};
        font-family: inherit;
        font-size: 12px;
    }
    ::placeholder {
        color: ${(props) => props.theme.fontColor};
        font-family: inherit;
        font-size: 12px;
    }
    select {
        background-color: ${(props) => props.theme.elements};
        color: ${(props) => props.theme.fontColor};
    }
    article {
        background-color: ${(props) => props.theme.elements};
        color: ${(props) => props.theme.fontColor};
    }
`;
