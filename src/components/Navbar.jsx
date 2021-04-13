import React, { useContext } from 'react';
import styled from 'styled-components';
import { FaSun, FaMoon } from 'react-icons/fa';
import { device } from '../styles/device';
import { Link } from 'react-router-dom';
import { AppContext } from './context';

const StyledNav = styled.nav`
    width: 90%;
    margin: 0 auto;
    padding: 2rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
        display: flex;
        justify-content: center;
        align-items: center;
        span {
            margin-left: 0.4rem;
        }
    }
    @media ${device.tablet} {
        width: 75%;
        margin: 0 auto;
    }
    @media ${device.laptop} {
        width: 88%;
        margin: 0 auto;
    }
    @media ${device.laptopL} {
        width: 85%;
        margin: 0 auto;
    }
    @media ${device.desktop} {
        width: 82%;
        margin: 0 auto;
    }
    @media ${device.desktopL} {
        width: 86%;
        margin: 0 auto;
    }
`;

const Navbar = () => {
    const { theme, handleTheme } = useContext(AppContext);

    return (
        <nav>
            <StyledNav>
                <Link to='/'>
                    <h1>Where in the world?</h1>
                </Link>
                <button onClick={() => handleTheme(theme)}>
                    {theme === 'dark' ? (
                        <>
                            <FaSun /> <span>Light Mode</span>
                        </>
                    ) : (
                        <>
                            <FaMoon /> <span>Dark Mode</span>
                        </>
                    )}
                </button>
            </StyledNav>
        </nav>
    );
};

export default Navbar;
