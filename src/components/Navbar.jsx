import React from 'react';
import styled from 'styled-components';
import { FaSun, FaMoon } from 'react-icons/fa';

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
`;

const Navbar = ({ toggleTheme, theme }) => {
    return (
        <nav>
            <StyledNav>
                <h1>Where in the world?</h1>
                <button onClick={toggleTheme}>
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
